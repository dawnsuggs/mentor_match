import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Footer from '../Footer/Footer';
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";
import Wrapper from "../Wrapper/Wrapper";



const SignInPage = ({ history }) =>

<div>
  <Wrapper>
    <div className="SignInPage">
      <SignInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </Wrapper>
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
        history.push(routes.ACCOUNT);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

  event.preventDefault();
  }
 
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

    <div className = "color3">
   
          <h1 className = "signIn">Sign-In</h1> 
          

      <form className="form" onSubmit={this.onSubmit}>

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
          Log In
        </button>
        { error && <p>{error.message}</p> }

      </form>

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
