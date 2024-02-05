const { getFirebaseApp } = require("./AppInit");
const { getAuth } = require("firebase/auth");

/**
 * @return {import('firebase/auth').Auth}
 */
function get() {
    return getAuth(getFirebaseApp());
}

module.exports = { get };
