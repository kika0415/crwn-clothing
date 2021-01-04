import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2mbmMHNFLLks9pmhJNUTgXIUBaRIm7xg",
  authDomain: "crwn-clothing-75961.firebaseapp.com",
  projectId: "crwn-clothing-75961",
  storageBucket: "crwn-clothing-75961.appspot.com",
  messagingSenderId: "781964352822",
  appId: "1:781964352822:web:24e49830ab7ff3b7b3a797",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
