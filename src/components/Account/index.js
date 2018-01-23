import React from 'react';
import PropTypes from 'prop-types';

import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';
import EditProfileForm from '../EditProfile';


const AccountPage = (props, { authUser }) =>

  <div>
    <h1>Account: {authUser.uid}</h1>
    <PasswordChangeForm />
    <br/>
    <EditProfileForm uid={authUser.uid}/>
  </div>
  

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);