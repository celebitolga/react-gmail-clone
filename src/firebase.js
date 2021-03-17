import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgtoJSJCB1ipYdxT5jf5Q1UiSeoXwVV5M",
  authDomain: "clone-bbd40.firebaseapp.com",
  projectId: "clone-bbd40",
  storageBucket: "clone-bbd40.appspot.com",
  messagingSenderId: "1059267623138",
  appId: "1:1059267623138:web:5084297fad82200443c6bb",
  measurementId: "G-VGQ4S61PNR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };