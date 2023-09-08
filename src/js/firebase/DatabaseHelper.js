import { getFirebaseApp } from "./AppInit";
import { getDatabase } from "firebase/database";

/**
 * @return {import('firebase/database').database}
*/
function get(){
    return getDatabase(getFirebaseApp());
}

export default { get }