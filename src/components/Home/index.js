import React, { Component } from 'react';
import User from "../User";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Wrapper2 from '../Wrapper2';
import "./home.css";
import firebase from "firebase";
// import PropTypes from 'prop-types';


var storage = JSON.stringify(localStorage)
var res = storage.replace(/\W/g, )
var now = res.split('undefined')
var yup = now[20]

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: yup,
      users: {},
      user: {}
    };

  }

  
  componentDidMount() {

    console.log(this.props);

    db.onceGetUsers().then(snapshot =>
      this.setState( () => (
        { users: snapshot.val(),
         })
      )

    );
    db.getUser(yup).then(snapshot =>{
      console.log(snapshot);
      this.setState(() => ({ user: snapshot.val() }))
      console.log(snapshot.val())
      })


  }



  render() {
    const { users } = this.state;
    const { user } = this.state;

    
    // for (var i = 0; i < users.length; i++){
    //   if (usertype)

    // }


    return (
    
<div> 
<Wrapper2>

<h1 className="thisAccount">My Account</h1> 

<div className = "container">
  <div className = "row">

    <div className = "col-sm-8">
        <div className = "myAccount">
          <User uid={this.state.userId}/>
        </div>
    </div>    
     

    <div   className = "col-sm-4">
        { !!users && <UserList users={users} /> }
    </div>

  </div>
</div>
</Wrapper2>
</div>


    );
  }
}



const UserList = ({ users }) =>
  <div className="makePretty">
    <h2 ClassName="matches">Professional Matches</h2>
  
    {Object.keys(users).map(key =>
    
    <div className="outer" key={key}> 

      <img className="profileImage" src={users[key].avatarURL}  alt=''/>      
      <h4 className="nameProfile">{users[key].firstname} {users[key].lastname}</h4>      
      <h5 className="jobTitle">Job Title: {users[key].jobTitle}</h5>
      <h6 className="employer">Employer: {users[key].jobTitle}</h6>
      <h6 className="skills">{users[key].skills}</h6>
      <div className="aboutMe">
      <h4>About Me:</h4>{users[key].bio}
      </div>
  </div>  
      
   
    )}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);



// var storage = JSON.stringify(localStorage)
        // var res = storage.replace(/\W/g, )
        // var now = res.split('undefined')
        // var userID = now[20]
