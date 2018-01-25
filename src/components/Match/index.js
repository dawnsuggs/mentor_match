import React, { Component } from 'react';

// import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

var storage = JSON.stringify(localStorage)
var res = storage.replace(/\W/g, )
var now = res.split('undefined')
var yup = now[20]

console.log(yup);
class MatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matched: {},
    };
  
  }
 



  render() {

    const { users, currentUser } = this.state;
    console.log(this.state)
   


    return (
      <div>
      <button onclick="myFunction()">Click me</button>

      </div>
    );
  }
}




export default MatchComponent;