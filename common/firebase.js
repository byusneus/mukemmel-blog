import firebase from "firebase";
import firebaseConfig from "../config/firebase-config";

// Initialize Firebase
try {
    firebase.app();
} catch (error) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;