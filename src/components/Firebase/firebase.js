import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaIBjS9lsXClPN24rYWURsdcEgtT71aUc",
  authDomain: "twitter-clone-ed4ba.firebaseapp.com",
  projectId: "twitter-clone-ed4ba",
  storageBucket: "twitter-clone-ed4ba.appspot.com",
  messagingSenderId: "32504947944",
  appId: "1:32504947944:web:3eddd04240b1b6d120955d",
  measurementId: "G-VJ01LLWB2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
