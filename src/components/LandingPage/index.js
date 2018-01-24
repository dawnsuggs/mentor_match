import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Wrapper1 from "../Wrapper1/Wrapper1";



const LandingPage = () => (
<div>
<div>
<Wrapper1>
<div className = "appNameDiv">
    <h1 className = "appName">Mentor Match </h1>
    <p className = "theme">Connecting You with Tech Professionals</p>
    
	<button class="btn btn-success" type="submit">
            <i class="fa fa-sign-in" aria-hidden="true"> </i>
          Sign-Up
    </button>

	<button class="btn btn-success" type="submit">
            <i class="fa fa-sign-in" aria-hidden="true"> </i>
            <a href="http://localhost:3000/signup"></a>
          Log In
    </button>

 
 </div> 
</Wrapper1>
</div>
<Footer/>
</div>

  );
export default LandingPage;


