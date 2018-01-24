import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
<div class = "navbar-wrapper">
  <nav class = "navbar navbar-default">
    <div class = "navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
        </button> 
         <a class="navbar-brand" href="http://localhost:3000/">Mentor Match</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class = "nav navbar-nav">
          <li><Link to={routes.HOME}>Home</Link></li>
          <li><Link to={routes.ACCOUNT}>Account</Link></li>  
        </ul>
     <div>
        <ul class="nav navbar-nav navbar-right">
            <li><i class="fa fa-user-plus" aria-hidden="true"></i><SignOutButton /></li>
            <li><a href="http://localhost:3000/signup"><i class="fa fa-user-plus" aria-hidden="true"></i>Sign Up</a></li>
            <li><a href="http://localhost:3000/signin">
            <i class="fa fa-sign-in" aria-hidden="true"></i> Log In</a></li>
        </ul>
      </div>
     </div>      
  </nav>
</div>
const NavigationNonAuth = () =>
  <ul>
    {/* <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li> */}
  </ul>

export default Navigation;
