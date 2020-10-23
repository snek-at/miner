//#region > Imports
// Request is designed to be the simplest way possible to make http calls
const request = require("request");
//#endregion

//#region > Functions
// Get all foos
function initIntel(intel) {
  // https://github.com/snek-at/front-legacy/blob/add-jesus-1/src/App.js
  // Create new session link for easy access
  session = intel.snekclient.session;
  // Begin session
  session.begin();
}
//#endregion

//#region > Exports
module.exports.initIntel = initIntel;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
