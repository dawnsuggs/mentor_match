import React, { Component } from 'react';
import User from "../User";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Wrapper2 from '../Wrapper2';
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
      user: {},
      // matches: [],
    };

  }

  
  componentDidMount() {
  

    db.onceGetUsers().then(snapshot =>
      this.setState( () => (
        { users: snapshot.val(),
         })

      )

    );
    db.getUser(yup).then(snapshot =>{
      this.setState(() => ({ user: snapshot.val() }))
      console.log(snapshot.val())
      })


  }
  




  render() {


    const { users } = this.state;
    const { user } = this.state;

    const theMatches = () =>{
      for (var i  in users){
      var usertype = user.designation 
      if (usertype !== users[i].designation) {
        for(var j = 0; j< users[i].skills.length; j++) {
          for (var k = 0; user.skills.length; k++){
            if (user.skills[k]===users[i].skills[j]) {
              console.log("help me", users[i])
            return user[i]
          
            }
            else{
              console.log("it went wrong here")
            }
          }
        }
        
      }
      else {
        console.log("something went wrong")
      }
  
    }
}
    // for (var i = 0; i < users.length; i++){
    //   var usertype = user.designation 
    //   if (usertype !== users[i].designation) {
    //     for(var j = 0; j< users.skills.length; j++) {
    //       for (var k = 0; user.skills.length; k++){
    //         if (user.skills[k]===users[i].skills[j]) {
    //           console.log("help me", user[i])
    //         return user[i]
          
    //         }
    //       }
    //     }
        
    //   }
  
    // }
    theMatches()
    console.log(users)


    return (
    
<div>  
<Wrapper2>

<div className = "container">
  <div className = "row">
  {/* <User /> */}
  
  <div className = "myAccount">
    <div className = "col-sm-6">
{/* <User /> */}
    </div>    
  </div>
    <div   className = "col-sm-6">
      <div className = "userDiv">
        { !!users && <UserList users={users} /> }
     </div>
    </div>
</div>
</div>
</Wrapper2>
</div>

    );
  }
}



const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
  
    {Object.keys(users).map(key =>
    
      <div key={key}> 
      <img src={users[key].avatarURL} width={200} mode='fit' alt=''/> 
      <br/>
      <h1>{users[key].firstname} {users[key].lastname}</h1>
      <br/>
      Job Title: {users[key].jobTitle}
      <br/>
      Employer: {users[key].jobTitle}
      <br/>
      About Me:{users[key].bio}
      <br/>
      {users[key].skills}
      <br/>
      </div>
    )}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);