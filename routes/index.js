//#region > Imports
//> Express
// Node.js Framework used to build web applications and APIs
const express = require("express");
const { Miner } = require("web3-eth-miner");
//const { Intel } = require("snek-intel");
global.fetch = require("node-fetch");
//> Services
const web3 = require("../services/web3.js");
const storehash = require("../services/storehash.js");
const ipfs = require("../services/ipfs.js");
// Miner Service
const ethminer = require("../services/ether.js");
const intelgen = require("../services/intelgen.js");
//#endregion

//#region > Routes
const router = express.Router();

// const options = {
//   defaultAccount: process.env.DEFAULT_ACCOUNT,
//   defaultBlock: process.env.DEFAULT_BLOCK,
//   defaultGas: process.env.DEFAULT_GAS,
//   defaultGasPrice: process.env.DEFAULT_GAS_PRICE,
//   transactionBlockTimeout: process.env.TRANSACTION_BLOCK_TIMEOUT,
//   transactionConfirmationBlocks: process.env.TRANSACTION_CONFIRMATION_BLOCKS,
//   transactionPollingTimeout: process.env.TRANSACTION_POLLING_TIMEOUT,
// };

// router.get("/", (req, res) => {
//   ethminer.initMiner(new Miner(process.env.ETH_URL, null, options));

//   res.sendStatus(200);
// });

const options = {
  defaultAccount: "0x4787660f86aa2AE3221399dfdf5a64A00B3420A1",
  defaultBlock: "genesis",
  defaultGas: 1,
  defaultGasPrice: 0,
  transactionBlockTimeout: 50,
  transactionConfirmationBlocks: 24,
  transactionPollingTimeout: 480,
};
// intelgen.initIntel();
// ethminer.initMiner(new Miner("http://localhost:8545", null, options));

router.get("/", (req, res) => {
  // const web3 = new Web3("http://localhost:8545");

  // console.log(web3);
  // web3.eth.getAccounts().then((res) => console.log(res));

  // const ethAddress = storehash.options.address;

  res.sendStatus(200);
});

// router.get("/", (req, res) => {
//   intelgen.initIntel(new Intel());

//   res.sendStatus(200);
// });
//#endregion

//#region > Exports
module.exports = router;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
