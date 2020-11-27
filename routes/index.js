//#region > Imports
//> Express
// Node.js Framework used to build web applications and APIs
const express = require("express");
//#endregion

//#region > Routes
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});
//#endregion

//#region > Exports
module.exports = router;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
