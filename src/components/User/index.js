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
        currentuser: {},
      };
    
    }

  
    componentDidMount() {

        
       db.getUser(this.state.id).then(snapshot =>{
       this.setState(() => ({ currentuser: snapshot.val() }))

       }

       
    );   
        
  
    }
  
    render() {
      
      const { currentuser } = this.state;
    
     
  
  
      return (
      
        <div>
        <img src={currentuser.avatarURL} width={200} mode='fit' alt=''/> 
        <br/>
        <h2>{currentuser.firstname} {currentuser.lastname}</h2>
        <br/>
        <h1>
        Job Title: </h1><p> {currentuser.jobTitle}</p>
        <br/><h1>
        Employer: </h1><p>{currentuser.employer}</p>
        <br/><h1>
        About Me:</h1><p>{currentuser.bio}</p>
        <br/>
        <i>{currentuser.skills}</i>
 
        </div>
      );
    }
  }
  


    export default User;