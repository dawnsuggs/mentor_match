
import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyDtm71m8EwzQ0VWhv4AEfGXqjSns3JPGP4",
    authDomain: "mentormatch-e1900.firebaseapp.com",
    databaseURL: "https://mentormatch-e1900.firebaseio.com",
    projectId: "mentormatch-e1900",
    storageBucket: "mentormatch-e1900.appspot.com",
    messagingSenderId: "710751010585"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const db = firebase.database();
  const auth = firebase.auth();
  
  export {
    db,
    auth,
  };
