//#region > Imports
//> Express
// Node.js Framework used to build web applications and APIs
const express = require("express");

//> Additional
/**
 * Node.js body parsing middleware.
 * Parse incoming request bodies in a middleware before your handlers.
 */
const bodyParser = require("body-parser");
// Providing a Connect/Express middleware to enable CORS
const cors = require("cors");

//> Configuration
// Basic Express config
const config = require("./config");

//> Routes
const routes = require("./routes");

//> Services
const IPFS = require("ipfs-core");
const web3 = require("./services/web3.js");
const storehash = require("./services/storehash.js");
// Miner Service
const ethminer = require("./services/ether.js");
const intelgen = require("./services/intelgen.js");
const fs = require("fs");
//#endregion

//#region > Initializers
// Init Express application
const app = express();
// Get .env values
require("dotenv").config();
//#endregion

//#region > Apply
//app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(config.centralErrorHandler);
app.use("/", routes);

app.listen(config.port, () => {
  console.log(`Server is up and running at http://localhost:${config.port}`);
});

async function main() {
  const node = await IPFS.create();
  const version = await node.version();

  console.log("Version:", version.version);

  const accounts = await web3.eth.getAccounts();

  ethminer.initMiner();

  while (true) {
    const res = await intelgen.fetchProfile().next();

    console.info("Minded data", res);
    const { personName, content } = res.value;
    const fileName = `snek_person_${personName}.json`;

    const fileAdded = await node.add({
      path: fileName,
      content,
    });

    console.info("Added file:", fileAdded.path, fileAdded.cid);

    const transactionHash = fileAdded.cid.toString();

    fs.appendFile(
      "ipfs.cid.log",
      `[${Date.now()}] ${transactionHash}\n`,
      function (err) {
        if (err) throw err;
        console.log(`${fileName} added to IPFS!`);
      }
    );

    storehash.methods.sendHash(transactionHash).send(
      {
        from: accounts[0],
      },
      (error, transactionHash) => {
        console.log(transactionHash);
      }
    ); //storehash
  }
}

main();

//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
