import React, { Component } from 'react';
import {db} from "../../firebase";



// this.state = {
//     user: {},
//   };
// const id = this.props.uid;  

class User extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: this.props.uid,
        user: {},
      };
    
    }

  
    componentDidMount() {

        
       db.getUser(this.state.id).then(snapshot =>{
       this.setState(() => ({ user: snapshot.val() }))

       }
       
    );   
        
  
    }
  
    render() {
  
      const { user } = this.state;

     
        
  
      return (
        <div>
          <h1></h1>
          <p></p>
  
        </div>
      );
    }
  }



 





    export default User;