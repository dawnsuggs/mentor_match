import React, { Component } from 'react';
import User from "../User";
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
// import Wrapper2 from '../Wrapper2';
import firebase from "firebase";
import "./home.css";
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
    const noDupes = Array.from(new Set(this.state.matched));
      




    return (
    
<div>  


<div className = "container">


<div  className = "row">

  <div className  = "col-sm-12">
  <div>
  <User uid={this.state.userId}/>
  </div>

  </div>

</div>


<div className="matched4">
  <div className = "row">

    <div   className = "col-sm-12">
        {<UserList matched={noDupes} />}
    </div>
</div>    
</div> 

  
 
</div>

</div>

    );
   
  }
  
}


const UserList = ({ matched }) => 

  <div>
    <h2>Your Professional Matches</h2>

    {Object.keys(matched).map(key =>
    
      <div key={key}> 
      <img className="profileImage" src={matched[key].avatarURL}  alt=''/> 
     
      <h6 className=".jobtitle">{matched[key].firstname} {matched[key].lastname}</h6>
      Job Title: {matched[key].jobTitle}
      
      Employer: {matched[key].jobTitle}


      
     <h6 className="tech">Technologies: {matched[key].skills} </h6>
      <div className="about">
      <h5 className="aboutMe2">About Me:</h5>
      <p>{matched[key].bio}</p>
     </div>
      </div>
    )}
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);