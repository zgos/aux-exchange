/**
 * If the price deviates from the AMM price, swap in the
 * AMM assuming that FTX price leads AMM price.
 *
 * Run ts-node mainnet-amm-limit-trader.ts to trade on mainnet.
 */
import { AptosAccount } from "aptos";
import { assert } from "console";
import { AU, DU, Pool } from "../src";
import { AuxClient, Network, FakeCoin } from "../src/client";
import { WebSocket } from "ws";

const AUX_TRADER_CONFIG = {
  // If the deviation ratio between AMM and oracle reaches this threshold, send
  // a swap.
  deviationThreshold: 0.0001,
  // The size of each order, denoted in decimal units. "DU" or "DecimalUnits"
  // represents a quantity with decimals. DU(0.07) means 0.07 ETH and DU(100)
  // means $100. The on chain representation is in "AU" or "AtomicUnits".
  ethPerSwap: DU(0.07),
  usdcPerSwap: DU(100),
  market: "ETH/USD",
};

// While you can technically connect directly to Devnet, we strongly recommend
// running a full validator for RPCs.
// const auxClient = AuxClient.create(Network.Devnet);
const auxClient = AuxClient.create({
  network: Network.Devnet,
  // validatorAddress: "http://localhost:8080",
});

// We create a new Aptos account for the trader
const trader: AptosAccount = new AptosAccount();

// We fund trader and module authority with Aptos, BTC, and USDC coins
async function setupTrader(): Promise<void> {
  await auxClient.airdropNativeCoin({
    account: trader.address(),
    quantity: AU(500_000_000),
  });

  // We're rich! Use canonical fake types for trading. Fake coins can be freely
  // minted by anybody. All AUX test markets use these canonical fake coins.
  await auxClient.registerAndMintFakeCoin({
    sender: trader,
    coin: FakeCoin.ETH,
    amount: DU(5000),
  });

  await auxClient.registerAndMintFakeCoin({
    sender: trader,
    coin: FakeCoin.USDC,
    amount: DU(5_000_000),
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printAccountBalance(
  auxClient: AuxClient,
  trader: AptosAccount
): Promise<void> {
  const traderBtcBalance =
    await auxClient.ensureMinimumFakeCoinBalance({
      sender: trader,
      coin: FakeCoin.ETH,
      minQuantity: DU(100),
      replenishQuantity: DU(1000),
    });

  const traderUsdcBalance =
    await auxClient.ensureMinimumFakeCoinBalance({
      sender: trader,
      coin: FakeCoin.USDC,
      minQuantity: DU(100_000),
      replenishQuantity: DU(1_000_000),
    });

  console.log(
    "  Trader ETH=",
    (
      await auxClient.toDecimalUnits(
            auxClient.getWrappedFakeCoinType(FakeCoin.ETH),
            traderBtcBalance
      )
    ).toString(),
    ", USDC=",
    (
      await auxClient.toDecimalUnits(
        auxClient.getWrappedFakeCoinType(FakeCoin.USDC),
        traderUsdcBalance
      )
    ).toString()
  );
}

async function tradeAMM(): Promise<void> {
  let maybePool = await Pool.read(auxClient, {
    coinTypeX: auxClient.getWrappedFakeCoinType(FakeCoin.ETH),
    coinTypeY: auxClient.getWrappedFakeCoinType(FakeCoin.USDC),
  });

  assert(maybePool !== undefined);
  const pool = maybePool as Pool;

  let prevBid = 0;
  let prevAsk = 0;
  let prevPoolX = 0;
  let prevPoolY = 0;

  let queue: any[] = [];

  let doWork = async function () {
    for (;;) {
      if (queue.length == 0) {
        await sleep(500);
        continue;
      }
      let data = queue.pop();
      if (data.type === "subscribed") {
        assert(data.type === "subscribed");
        assert(data.channel === "ticker");
        assert(data.market === AUX_TRADER_CONFIG.market);
      } else if (data.type === "update") {
        let bestBid = data.data.bid;
        let bestAsk = data.data.ask;
        let poolX = pool.amountX;
        let poolY = pool.amountY;
        if (prevBid !== bestBid || prevAsk !== bestAsk) {
          try {
            await pool.update();
            if (poolX.toNumber() === 0 || poolY.toNumber() === 0) {
              const amountXToAdd = DU(100);
              const amountYToAdd = DU(150000);
              const tx = await pool.addExactLiquidity({
                sender: trader,
                amountX: amountXToAdd,
                amountY: amountYToAdd,
              });
              console.log(">>>> Add Liquidity event:", tx.payload);
              await pool.update();
            }
            
          } catch (e) {
            console.log("  Pool update failed with error: ", e);
          }

          if (
            prevPoolX !== poolX.toNumber() ||
            prevPoolY !== poolY.toNumber()
          ) {
            console.log(
              `Pool ETH=${poolX.toString()}, USDC=${poolY.toString()}`
            );
            prevPoolX = poolX.toNumber();
            prevPoolY = poolY.toNumber();
          }

          let tx;
          const poolPrice = poolY.toNumber() / poolX.toNumber();
          // If FTX prices are relatively higher than a given threshold, swap in for ETH from AUX
          if (bestBid / poolPrice - 1 > AUX_TRADER_CONFIG.deviationThreshold) {
            console.log(">>>> Swapping for ETH");
            try {
              tx = await pool.swapYForXLimit({
                sender: trader,
                exactAmountIn: AUX_TRADER_CONFIG.usdcPerSwap,
                minOutPerIn: DU(1 / bestBid),
              });
              console.log(">>>> Swap event:", tx.payload);
              await printAccountBalance(auxClient, trader);
            } catch (e) {
              console.log("  Swap from USDC to ETH failed with error: ", e);
            }
          }
          // If FTX prices are relatively lower than a given threshold, swap out of ETH from AUX
          else if (
            poolPrice / bestAsk - 1 >
            AUX_TRADER_CONFIG.deviationThreshold
          ) {
            console.log(">>>> Swapping for USDC");
            try {
              tx = await pool.swapXForYLimit({
                sender: trader,
                exactAmountIn: AUX_TRADER_CONFIG.ethPerSwap,
                minOutPerIn: DU(bestAsk),
              });
              console.log(">>>> Swap event:", tx.payload);
              await printAccountBalance(auxClient, trader);
            } catch (e) {
              console.log("  Swap from ETH to USDC failed with error: ", e);
            }
          }
          prevBid = bestBid;
          prevAsk = bestAsk;
        }
      }
    }
  };
  try {
    const ws = new WebSocket("wss://ftx.com/ws/");
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: "subscribe",
          market: "ETH/USD",
          channel: "ticker",
        })
      );
    };

    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data.toString()) as any;
      queue.push(data);
    };
  } catch (e) {
    console.log("  FTX Websocket connection failed with error:", e);
  }

  doWork();
}

async function main() {
  await setupTrader();
  await tradeAMM();
}

main().then(() => {});
