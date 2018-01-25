import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../LandingPage';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
// import EditProfile from '../EditProfile';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import Wrapper1 from "../Wrapper1/Wrapper1";
import './index.css';
import "../LandingPage/LandingPage.css";
import "../SignIn/SignIn.css";
import "../Navbar/Navbar.css";
import "../Footer/Footer.css";
import '../Wrapper1/Wrapper1';


const App = () =>
<div className = "navbar-wrapper">
  <Router>
    <div className="app">
      <Navigation />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={(props) => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
     
    </div>
  </Router>
</div>

export default withAuthentication(App);