const {initializeApp} = require('firebase/app');
const { firebaseConfig } = require('./config');
var app;
/**
 * @returns {import('firebase/app').FirebaseApp}
 */
const getFirebaseApp = () =>
{
    if (app != undefined)
    {
        app;
        console.log("firebase got ready")
    } else{
        console.log("firebase is ready")
        app = initializeApp(firebaseConfig);
    }
    return app;
}

module.exports = {
    getFirebaseApp
}