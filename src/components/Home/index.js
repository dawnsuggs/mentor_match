import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';


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
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users && <UserList users={users} /> }
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