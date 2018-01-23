import React, { Component } from 'react';
import { 
    Link,
    withRouter, } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import "./SignUp/SignUp.css";
import Wrapper from "./Wrapper";


const SignUpPage = ({ history }) =>
<Wrapper>
  <div className = "color">
    <div >
      <div >
        <img className = "logo" src = "./SignUp/logo.png" alt = "logo" />
        <h1 className = "signUp">Sign-Up</h1>
        <div>

      <p className = "stats">"According to a poll conducted by LinkedIn in 2016, <em>eighty-five percent</em> of jobs are not advertised.
      </p>
      <p className = "stats">They are found through networking opportunities like Mentor Match."
      </p>
      </div>
      <SignUpForm history={history} />
      </div>

    </div>
  </div>
</Wrapper>


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;
    
      const {
        history,
      } = this.props;

      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
  
      event.preventDefault();

  }


  render() {

    const isInvalid =
    this.state.passwordOne !== this.state.passwordTwo ||
    this.state.passwordOne === '' ||
    this.state.email === '' ||
    this.state.username === '';


    return (
  <div className = "signUpForm">
      <form onSubmit={this.onSubmit}>

       <input
          value={this.state.username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.state.passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={this.state.passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { this.state.error && <p>{this.state.error.message}</p> }

      </form>
  </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};