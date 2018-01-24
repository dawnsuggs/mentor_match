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
  

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);