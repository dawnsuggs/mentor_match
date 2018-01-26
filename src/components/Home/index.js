
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
      matched: []
      // matches: [],
    };

  }

  
  componentDidMount() {
  

    db.onceGetUsers().then(snapshot =>{
      var users = snapshot.val()
      this.setState( () => (
        { users: snapshot.val(),
         })

      )
      db.getUser(yup).then(snapshot =>{
        var user = snapshot.val()
        this.setState(() => ({ user: snapshot.val() }))
        console.log(snapshot.val())
        this.theMatches(users, user)
        })

    }
    );
    

      
  }
  
  theMatches = (users, user) =>{
    console.log("here I am", this.state.matched)
    var array = this.state.matched
    
      for (var i  in users){
      var usertype = user.designation 
      if (usertype !== users[i].designation) {
        for(var j = 0; j< users[i].skills.length; j++) {
          for (var k = 0; k < user.skills.length; k++){
            if (user.skills[k]===users[i].skills[j]) {
              // if (users[i] === -1){
                array.push(users[i])
                this.setState({matched: array})
              // }
              
            }

          }
        }
        
      }
    
    }
    }




  render() {


    const { users } = this.state;
    const { user } = this.state;




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
        {<UserList matched={this.state.matched} />}
     </div>
    </div>
</div>
</div>
</Wrapper2>
</div>

    );
  }
}



const UserList = ({ matched }) =>
  <div>
    <h2>List of Usernames of matched</h2>
  
    {Object.keys(matched).map(key =>
    
      <div key={key}> 
      <img src={matched[key].avatarURL} width={200} mode='fit' alt=''/> 
      <br/>
      <h1>{matched[key].firstname} {matched[key].lastname}</h1>
      <br/>
      Job Title: {matched[key].jobTitle}
      <br/>
      Employer: {matched[key].jobTitle}
      <br/>
      About Me:{matched[key].bio}
      <br/>
      {matched[key].skills}
      <br/>
      </div>
    )}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);