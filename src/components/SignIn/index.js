import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Footer from '../Footer/Footer';
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";

const SignInPage = ({ history }) =>

  <div className="SignInPage">
 
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }
  //  handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   if (!this.state.email || !this.state.password) {
  //     alert("Fill out your email address and password please!");
    
  //   } else {
  //     alert(`Welcome Back ${this.state.name} `);
  //   }

  //   this.setState({
  //     name: "",
  //     email: "",
  //     password: ""
      
  //   });
  // };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
         <Navbar />
         <div class="container center">
    <div class="row">
      <div class="col-md-12">
        <h1>Mentor Match </h1> 

        <p>
          {this.state.email} {this.state.password}
        </p>
      <form className="form" onSubmit={this.onSubmit}>
      
         <div>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          </div>
          <div>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div>
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        </div>
        <br />
        <button class="btn btn-success" disabled={isInvalid} type="submit">
            <i class="fa fa-sign-in" aria-hidden="true"> </i>
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
      </div>

          <Footer />
      </div>

    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
  // handleFormSubmit,
};
