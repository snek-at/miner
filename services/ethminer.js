//#region > Imports
// Request is designed to be the simplest way possible to make http calls
const request = require("request");
//#endregion

//#region > Functions
// Get all foos
function initMiner(miner) {
  // https://web3js.readthedocs.io/en/v2.0.0-alpha/web3-eth-miner.html#startmining
  miner.startMining(3);
}
//#endregion

//#region > Exports
module.exports.initMiner = initMiner;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
