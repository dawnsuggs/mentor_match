import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";


const LandingPage = () => (
<div>
    <div>
        <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Getting Started</title>
            <link rel="stylesheet" href="bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora" />
            <link rel="stylesheet" href="user.css" />
            <link rel="stylesheet" href="Article-Clean.css" />
            <link rel="stylesheet" href="Article-Dual-Column.css" />
            <link rel="stylesheet" href="Login-Form-Dark.css" />
        </div>

    <div>
        <div className="article-dual-column">
            <div className="container"></div>
        </div>
        <div className="login-dark">
            <form method="post">
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                <br />
                <br />
                <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                <br />
                <div className="form-group">
                <button className = "LogIn" className="btn btn-primary btn-block" type="submit">Log In</button> 
                <button className = "Registration" className="btn btn-primary btn-block" type="submit">Registration</button>
               </div>
                <br />
                <a href="#" className="forgot">Forgot your email or password?</a></form>
               
        </div>
       
    </div>
</div>
);
export default LandingPage;




