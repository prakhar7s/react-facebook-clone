import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDKxkLEgv79tMINp0mE9Xfv77_Uev9XSNE",
  authDomain: "clwn-clothing-6890b.firebaseapp.com",
  projectId: "clwn-clothing-6890b",
  storageBucket: "clwn-clothing-6890b.appspot.com",
  messagingSenderId: "345214303241",
  appId: "1:345214303241:web:dab183d5acbe4b492f8cd8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;