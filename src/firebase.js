import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA8fbZDMMukrzutR5giaDqZrXeTefqWKiQ",
    authDomain: "customer-card-98193.firebaseapp.com",
    projectId: "customer-card-98193",
    storageBucket: "customer-card-98193.appspot.com",
    messagingSenderId: "224155456062",
    appId: "1:224155456062:web:5010f450d668e5d2a3f76f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, firebase, db, storage}