import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "../Footer/Footer";



const Navbar = () => (

<div class="navbar-wrapper">

  <nav class="navbar navbar-default">

        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
              <a class="navbar-brand" href="http://localhost:3000/">Mentor Match</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="http://localhost:3000/"> Home <span class="sr-only">(current)</span></a></li>

              
            </ul>
         
            <div>
       
              <ul class="nav navbar-nav navbar-right">
               
                  <li><a href="http://localhost:3000/signup"><i class="fa fa-user-plus" aria-hidden="true"></i>Sign Up</a></li>
                  <li><a href="http://localhost:3000/signin">
                  <i class="fa fa-sign-in" aria-hidden="true"></i> Log In</a></li>
              
              </ul>
            </div>
          </div>
        </div>
      
  </nav>

</div>

  );
export default Navbar;
