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
<div className = "navbar-wrapper">
  <nav className = "navbar navbar-default">
    <div className = "navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
        </button> 
         <a className="navbar-brand" href="http://localhost:3000/">Mentor Match</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className = "nav navbar-nav">
          <li><Link to={routes.HOME}>Home</Link></li>
          <li><Link to={routes.ACCOUNT}>Account</Link></li>  
        </ul>
     <div>
        <ul className="nav navbar-nav navbar-right">
            <li><i className="fa fa-user-plus" aria-hidden="true"></i><SignOutButton /></li>
            <li><a href="http://localhost:3000/signup"><i className="fa fa-user-plus" aria-hidden="true"></i>Sign Up</a></li>
            <li><a href="http://localhost:3000/signin">
            <i className="fa fa-sign-in" aria-hidden="true"></i> Log In</a></li>
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
