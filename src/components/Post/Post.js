
import React, { Component } from 'react';
import ThreadDisplay from '../ThreadDisplay/ThreadDisplay';
import Message from '../Message/Message';
import firebase from '../../firebase';
import 'firebase/database';


// import './App.css';


class App extends Component {
   
	constructor (props) {
		super(props);
		
		// const config = 
		// 	{
		// 	  apiKey: "AIzaSyDR-HSyWa6rK53R9FRpmVK6izDiXLXQ-Pc",
		// 	  authDomain: "mentormatch-a8b32.firebaseapp.com",
		// 	  databaseURL: "https://mentormatch-a8b32.firebaseio.com",
		// 	  projectId: "mentormatch-a8b32",
		// 	  storageBucket: "mentormatch-a8b32.appspot.com",
		// 	  messagingSenderId: "810684070609"
		// 	};

	// this.app = firebase.initializeApp(config);
	// this.database = this.app.datbase();
		
	}

componentDidMount() {
	console.log("post mount")
}

  
render() {
  return(

    <ThreadDisplay />
  
);

}
}

export default App