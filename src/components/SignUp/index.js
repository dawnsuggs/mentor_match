import React, { Component } from 'react';
import { 
    Link,
    withRouter, } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { db } from '../../firebase';
import "./SignUp.css";
import Wrapper from '../Wrapper'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const SignUpPage = ({ history }) =>
<div>
<div>

 <Wrapper>
  <div className = "color">
    <h1 className = "signUp">SignUp</h1>
        <SignUpForm history={history} />
  </div>
</Wrapper>
</div>
<Footer/>
</div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        firstname,
        lastname,
        email,
        passwordOne,
      } = this.state;
    
      const {
        history,
      } = this.props;

      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("yolo", authUser.uid, firstname, lastname, email);
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, firstname,
          lastname,
          email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();

  }

  render() {
    const isInvalid =
    this.state.passwordOne !== this.state.passwordTwo ||
    this.state.passwordOne === '' ||
    this.state.email === '';

    return (
   
    <div>
      <form onSubmit={this.onSubmit}>
       <input
          value={this.state.firstname}
          onChange={event => this.setState(updateByPropertyName('firstname', event.target.value))}
          type="text"
          placeholder="First Name"
        />
        <input
          value={this.state.lastname}
          onChange={event => this.setState(updateByPropertyName('lastname', event.target.value))}
          type="text"
          placeholder="Last Name"
        />  
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.state.passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={this.state.passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />

        <button  className="signUpButton" disabled={isInvalid} type="submit">
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

