import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
const config = {
    apiKey: "AIzaSyD4KBS9va5ksHcWO2yRqwCtc1LDUPkw_qg",
    authDomain: "crwn-db-be47f.firebaseapp.com",
    databaseURL: "https://crwn-db-be47f.firebaseio.com",
    projectId: "crwn-db-be47f",
    storageBucket: "crwn-db-be47f.appspot.com",
    messagingSenderId: "125712874949",
    appId: "1:125712874949:web:aac8c3434c4025b9a75fac",
    measurementId: "G-LCSCX8P3QC"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
