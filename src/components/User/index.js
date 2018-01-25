import React, { Component } from 'react';
import {db} from "../../firebase";
import "./user.css";



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


      console.log(this.state.id);  
       db.getUser(this.state.id).then(snapshot =>{

        if(snapshot.val()){
       this.setState(() => ({ currentuser: snapshot.val() }))
     }
     else {
        console.log("nope none found");
     }

       } 
    ); 

    }
  
    render() {
      
      // const { currentuser } = this.state;
      console.log(this.state);
 
      return (
      
      <div className="outer2">
        <img className="imgProfile2" src={this.state.currentuser.avatarURL}  alt=''/> 
        <h3 className="Name3">{this.state.currentuser.firstname} {this.state.currentuser.lastname}</h3>
        <h6 className="job2">Job Title: </h6>
        <h6> {this.state.currentuser.jobTitle}</h6>
        <h6 className="emp"> Employer: </h6>
        <h6 className="employer3">{this.state.currentuser.employer}</h6>
        <h6 className="tech3">Technologies:</h6><span/>
        <h6 className="tech4">{this.state.currentuser.skills}</h6>

        <div className="aboutMe2">
        <h6 className="aboutBio"> About Me:</h6> 
         <h6>{this.state.currentuser.bio}</h6>   
        </div>
        
        
      </div>
      );
    }
  }
  


    export default User;