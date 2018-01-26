import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../Session/withAuthorization';
import EditProfileForm from '../EditProfile';
import User from "../User";
import PasswordChangeForm from '../PasswordChange';
// import Wrapper2 from '../Wrapper2/Wrapper2';
import './account.css';

const AccountPage = (props, { authUser }) =>

<div>
	
	  <div className="accountForm">

	  <h6 className = "myAccountName">My Account Page</h6>
      <User uid={authUser.uid}/>
	  	
	   <div className="scroll" className="aBackground"> 
	    <br/>
	    <EditProfileForm uid={authUser.uid}/>
		<h6 ClassName = "accountPage">Account: {authUser.email}</h6>
	    <PasswordChangeForm />
	    </div>

	  </div>
	
</div>

  
AccountPage.contextTypes = {
	authUser: PropTypes.object,
	
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);