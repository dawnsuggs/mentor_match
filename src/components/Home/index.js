import React, { Component } from 'react';
import User from "../User";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Wrapper2 from '../Wrapper2';
import firebase from "firebase";
// import PropTypes from 'prop-types';



class HomePage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      users: {}
    };
  
  }


  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
      
    );
 
  }
  

  render() {
    
    const { users } = this.state;
   


    return (
    
<div>  
<Wrapper2>

<div className = "container">
  <div className = "row">
  {/* <User /> */}
  
  <div className = "myAccount">
    <div className = "col-sm-6">
<User />
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