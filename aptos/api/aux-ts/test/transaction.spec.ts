import { ApiError, FailedTransactionError } from "aptos";
import * as assert from "assert";
import { describe, it } from "mocha";
import Pool from "../src/amm/dsl/pool";
import { AuxClient } from "../src/client";
import { DecimalUnits } from "../src/units";

const [auxClient, sender] = AuxClient.createFromEnvForTesting({});

const auxCoin = `${auxClient.moduleAddress}::aux_coin::AuxCoin`;
const aptosCoin = "0x1::aptos_coin::AptosCoin";

describe("AUX Client tests", function () {
  this.timeout(30000);

  let pool: Pool;

  it("propagate errors", async function () {
    assert.rejects(async () => {
      await auxClient.registerAuxCoin(sender);
      // coin already registered
      await auxClient.registerAuxCoin(sender, {
        checkSuccess: true,
      });
    }, FailedTransactionError);
  });

  it("fail two txs with different payloads but the same sequence number", async function () {
    assert.rejects(async () => {
      const maybePool = await Pool.read(auxClient, {
        coinTypeX: auxCoin,
        coinTypeY: aptosCoin,
      });
      if (maybePool == undefined) {
        pool = await Pool.create(auxClient, {
          sender,
          coinTypeX: auxCoin,
          coinTypeY: aptosCoin,
          feePct: 0,
        });
      } else {
        pool = maybePool;
      }
      await Promise.all([
        pool.addExactLiquidity({
          sender,
          amountX: new DecimalUnits(0.000001),
          amountY: new DecimalUnits(0.0000001),
        }),
        pool.addExactLiquidity({
          sender,
          amountX: new DecimalUnits(0.000002),
          amountY: new DecimalUnits(0.0000002),
        }),
      ]);
    }, ApiError);
  });
});
