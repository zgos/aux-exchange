import { AptosAccount } from "aptos";
import { Account } from "..";
import { AuxClient, FakeCoin } from "../client";
import Market from "../clob/dsl/market";
import * as redis from "redis";

async function main() {
  const auxClient = AuxClient.createFromEnv({});
  let baseCoinType = await auxClient.getWrappedFakeCoinType(FakeCoin.AUX);
  const quoteCoinType = await auxClient.getWrappedFakeCoinType(FakeCoin.USDC);
  const market = await Market.read(auxClient, { baseCoinType, quoteCoinType });

  const trader = AptosAccount.fromAptosAccountObject({
    privateKeyHex:
      "0xe2326b7116633f8cb150e7ad56affd631e20789440317c47721862a62bcf362e",
  });
  //   const openOrders = await market.openOrders(trader.address().hex());
  const account = new Account(auxClient, trader.address().hex());
  market;
  console.log(account);
  const trades = await account.tradeHistory({ baseCoinType, quoteCoinType });
  console.log(trades)
//   console.log(openOrders[0]?.quantity.toNumber());

  const redisClient = redis.createClient();
  redisClient.on("error", (err) => console.error("[Redis]", err));
  await redisClient.connect();
  baseCoinType = await auxClient.getWrappedFakeCoinType(FakeCoin.ETH);
  const bars = await redisClient.lRange(
    `${baseCoinType}-${quoteCoinType}-bar-1m`,
    0,
    -1
  );
  console.log(bars);
  //   bars.forEach((bar) => {
  //     console.log(JSON.parse(bar));
  //   });
  await redisClient.disconnect();
}

main();
