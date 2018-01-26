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
      
  <div>
  <div className="accountDiv">
        <h1 className="nameBrand">{this.state.currentuser.firstname} {this.state.currentuser.lastname}</h1>

        {/* <h6 className="Name3">{this.state.currentuser.firstname} {this.state.currentuser.lastname}</h6> */}

        <img className="imgProfile2" src={this.state.currentuser.avatarURL}  alt=''/> 
   
        <h6 className="job2"> {this.state.currentuser.jobTitle}</h6>
  </div>

  <div className="aboutMe2">
        <h2 className="emp">Employer: {this.state.currentuser.employer}</h2>
        <br/>
        <h4 className="emp">Technologies: {this.state.currentuser.skills}</h4>
        <br/>
 
        <div >
        <h6 className="aboutBio"> About Me</h6> 
  
         <h6 className="comment">{this.state.currentuser.bio}</h6>  

        </div>
   </div> 
</div>
        
     
    
      );
    }
  }
  


    export default User;