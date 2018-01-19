// import React from "react";
import React, { Component } from "react";
import "./Mentor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Header from "../Frame/Header";
// import Panel from "../Frame/Panel";
// import React from "react";
// // import { Link } from "react-router-dom";
// import "./Mentor.css";


class Mentor extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    career: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      career: ""
      
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       <Navbar />
  
  
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
            <div>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          </div>
          <div>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          </div>
          <div>
          <input
            value={this.state.career}
            name="career"
            onChange={this.handleInputChange}
            type="text"
            placeholder="career"
          />
          </div>
          
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <Footer />
     
 

      </div>

    );
  }
}

export default Mentor;





