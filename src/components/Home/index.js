import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import Wrapper2 from '../Wrapper2';


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
  
  <div className = "myAccount">
    <div className = "col-sm-6">
          <h3>My Account</h3>
          <p>The Home Page is accessible by every signed in user.</p>
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
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].firstname} {users[key].lastname}
      <br/>
      {users[key].url}</div>
    )}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);