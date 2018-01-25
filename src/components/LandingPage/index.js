import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Wrapper1 from "../Wrapper1/Wrapper1";
import * as routes from "../../constants/routes";


const LandingPage = () => (
<div>
<div>
<Wrapper1>
<div className = "appNameDiv">
    <h1 className = "appName">Mentor Match </h1>
    <p className = "theme">Connecting You with Tech Professionals</p>
    
 	<button type="submit">
          <Link to={routes.SIGN_UP}>Sign-Up</Link>
    </button>

    <button type="submit">           
          <Link to={routes.SIGN_IN}>Log-In</Link>
    </button>


 
 </div> 
</Wrapper1>
</div>
<Footer/>
</div>

  );
export default LandingPage;


	

    // <button type="submit">
    //      Sign-Up
    // </button>

    //  <button type="submit">           
    //      Sign-In
    //  </button>