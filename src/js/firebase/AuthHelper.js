import { getFirebaseApp } from "./AppInit";
const { getAuth } = require("firebase/auth");
// const  { getAuth } = require( "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js")

// const { firebaseConfig } = require('@/js/firebase/config');

// const {initializeApp} = require("firebase/app")
/**
 * @return {import('firebase/auth').Auth}
 */
function get(){
    return getAuth(getFirebaseApp());
    // return getAuth(initializeApp(firebaseConfig));
}



export default { get }