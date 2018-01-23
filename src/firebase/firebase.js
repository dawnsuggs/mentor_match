
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDR-HSyWa6rK53R9FRpmVK6izDiXLXQ-Pc",
  authDomain: "mentormatch-a8b32.firebaseapp.com",
  databaseURL: "https://mentormatch-a8b32.firebaseio.com",
  projectId: "mentormatch-a8b32",
  storageBucket: "mentormatch-a8b32.appspot.com",
  messagingSenderId: "810684070609"
};
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const db = firebase.database();
  const auth = firebase.auth();
  var storage = firebase.storage();
  
  export {
    db,
    auth,
    storage,
  };
