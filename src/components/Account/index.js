import React from 'react';
import PropTypes from 'prop-types';

// import MatchComponent from '../Match';
// import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';
import EditProfileForm from '../EditProfile';
import User from "../User";


const AccountPage = (props, { authUser }) =>

  <div>
    <h1>Account: {authUser.email}</h1>
    {/* <PasswordChangeForm /> */}
    <User uid={authUser.uid}/>
    <br/>
    {/* <MatchComponent uid={authUser.uid} /> */}

    <EditProfileForm uid={authUser.uid}/>
  </div>

import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';
import EditProfileForm from '../EditProfile';
import Wrapper2 from '../Wrapper2/Wrapper2';
import './account.css';

const AccountPage = (props, { authUser }) =>
<div>
	<Wrapper2>
	  <div>
	  	<h6 className = "myAccountName">My Account Page</h6>
	    <h6 ClassName = "accountPage">Account: {authUser.uid}</h6>
	    <PasswordChangeForm />
	    <br/>
	    <EditProfileForm uid={authUser.uid}/>
	  </div>
	</Wrapper2>
</div>

  
AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);