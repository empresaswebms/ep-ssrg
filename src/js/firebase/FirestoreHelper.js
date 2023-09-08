const {initializeApp} = require('firebase/app');
const { firebaseConfig } = require('./config');
import { getFirestore } from "firebase/firestore";

/**
 * @return {import('firebase/firestore').Firestore}
*/
function get(){
    return getFirestore(initializeApp(firebaseConfig));
}

export default { get }