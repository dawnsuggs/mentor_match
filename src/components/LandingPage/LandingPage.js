import React from "react";
// import { Link } from "react-router-dom";
import "./LandingPage.css";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";


const LandingPage = () => (
 <div className="LandingPage">
   <Navbar />
   <Wrapper>
  <div class="container center">
    <div class="row">
      <div class="col-md-12">
        <h2>
          <span class="fa-stack fa-lg">
            <i class="fa fa-square-o fa-stack-2x" aria-hidden="true"></i> 
          </span>
                
            </h2>
              <h1>Mentor Match </h1>
                <p>Connecting you to tech professionals...projecting you to your future career.</p>
                  <button class="btn btn-success btn-lg"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i> <br />
                  click me
                  </button>
                
      </div>
    </div>
  </div>
  <div>

    <Footer />

  </div>

  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  </div>
  </Wrapper>
</div>
  );
export default LandingPage;


