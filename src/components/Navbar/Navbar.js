import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/"



const Navbar = () => (

<div className="navbar-wrapper">

  <nav className="navbar navbar-default">

        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <a className="navbar-brand" href="http://localhost:3000/">Mentor Match</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="http://localhost:3000/"> Home <span className="sr-only">(current)</span></a></li>

            </ul>
            <div>

                     <ul className="nav navbar-nav navbar-right">
               
                  <li><a href="http://localhost:3000/signup"><i className="fa fa-user-plus" aria-hidden="true"></i>Sign Up</a></li>
                  <li><a href="http://localhost:3000/signin">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Log In</a></li>
                  <li><a href="http://localhost:3000/message"><i class="fa fa-inbox" aria-hidden="true"></i>In Box </a></li>

              
              </ul>
            </div>
          </div>
    </div>      
  </nav>
</div>


  );
export default Navbar;
