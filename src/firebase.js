import firebase from "firebase";

const firebaseConfig = {
  apiKey: "KEY???",
  authDomain: "????",
  databaseURL: "????",
  projectId: "????",
  storageBucket: "?????",
  messagingSenderId: "??????",
  appId: "??????",
  measurementId: "????",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
