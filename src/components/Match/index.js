import React, { Component } from 'react';

// import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';




class MatchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matched: {},
    };
  
  }
 

  componentDidMount() {


    db.getMatchedUsers().then(snapshot =>
      this.setState(() => ({ matched: snapshot.val() }))
      
      
    );

  }

  render() {

    const { users, currentUser } = this.state;
    console.log(this.state)
   


    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

      </div>
    );
  }
}




export default MatchComponent;