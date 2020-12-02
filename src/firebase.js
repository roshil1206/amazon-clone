import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcgNxc5OqELJd-boRrxgqzVdMM4l7iiQY",
  authDomain: "cl-e2f18.firebaseapp.com",
  databaseURL: "https://cl-e2f18.firebaseio.com",
  projectId: "cl-e2f18",
  storageBucket: "cl-e2f18.appspot.com",
  messagingSenderId: "617087796074",
  appId: "1:617087796074:web:9fcb0bcccdcd61aa875b13",
  measurementId: "G-TBBKSP3CJ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
