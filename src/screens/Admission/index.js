            
import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./admission.css";

const initialState = {
    childname: "",
    parentname: "",
    number: "",
    email: "",
    message: "",
    campus: "",
    class: "",
    admissionfor: "",
    emailError: "",
}

class Admission extends Component {

  state = initialState;


  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let emailError = "";
    let childnameError = "";
    let parentNameError = "";
    let whatsAppError = "";


    if (!this.state.childname) {
      childnameError = "child name cannot be empty";
    }

    if (!this.state.parentname) {
      parentNameError = "parent name cannot be empty";
    }

    if (!this.state.number) {
      whatsAppError = "whatsapp number cannot be empty";
    }

    if (!this.state.email) {
      emailError = "email cannot be empty";
    }

    if(childnameError || parentNameError || whatsAppError || emailError) {
      this.setState({ childnameError,parentNameError,whatsAppError, emailError});
      return false;
    }
   
  
   


    if (!this.state.email.includes('@')) {
      emailError = "invalid email";
    }

  

    if (emailError) {
      this.setState({emailError});
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      childnameError: "", parentNameError: "", whatsAppError: "", emailError: ""
    })
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
     
      this.setState(initialState);
      
    }
  };
  render() {
    const {childname,parentname,number,email,message} = this.state;
    return (
      <div id="site-wrapper">
        <Header />
        <div id="page-content">
          <div className="getin-touch-form">
            <form className="getintouch-form" onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contactform2" />
              <h1 className="form-header">Admission Inquiry 2020-21</h1>
              <p className="form-header1">
                Submit your details for free counselling / campus visit
              </p>
              <p>
                <select
                  name="admissionfor"
                  className="drop-down"
                  onChange={this.handleInputChange}
                >
                  <option value="Intreseted In *">Intreseted In*</option>
                  <option value="Admission in Preschool">
                    Admission in Preschool
                  </option>
                  <option value="Admission in Elementary">
                    Admission in Elementary
                  </option>
                </select>
              </p>

              <p>
                <select
                  name="class"
                  className="drop-down"
                  onChange={this.handleInputChange}
                >
                  <option value="Intreseted In *">Intreseted In Grade*</option>
                  <option value="Preschool">Preschool</option>
                  <option value="Grade1">Grade 1</option>
                  <option value="Grade2">Grade 2</option>
                  <option value="Grade3">Grade 3</option>
                  <option value="Grade4">Grade 4</option>
                  <option value="Grade5">Grade 5</option>
                  <option value="Grade6">Grade 6</option>
                </select>
              </p>

              <p>
                <select
                  className="drop-down"
                  onChange={this.handleInputChange}
                  name="campus"
                >
                  <option value="Intreseted In *">Select Campus*</option>
                  <option value="Newyork">Newyork</option>
                  <option value="Australia">Australia</option>
                </select>
              </p>
              <p>
                <input
                  type="text"
                  name="childname"
                  placeholder="Child Name*"
                  value={childname}
                  onChange={this.handleInputChange}
                />
              </p>
              <div id="error-msg">{this.state.childnameError}</div>
              <p>
                <input
                  type="text"
                  name="parentname"
                  value={parentname}
                  placeholder="Parent Name*"
                  onChange={this.handleInputChange}
                />
              </p>
              <div id="error-msg">{this.state.parentNameError}</div>

              <p>
                <input
                  type="number"
                  name="number"
                  value={number}
                  placeholder="WhatsApp Number*"
                  onChange={this.handleInputChange}
                />
              </p>
              <div id="error-msg">{this.state.whatsAppError}</div>

              <p>
                <input
                type="text"
                  name="email"
                  placeholder="Email Id*"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </p>
              <div id="error-msg">{this.state.emailError}</div>

              <p>
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={message}
                  onChange={this.handleInputChange}
                >
                    
                </textarea>
              </p>

              <p>
                <button type="submit" className="submit-btn2">
                  Submit
                </button>
              </p>
            </form>
          </div>

          <div className="contact-banner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5628303872195!2d77.61543101482161!3d12.935795490879382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144fbf86a7cb%3A0x1bfc14ceeca29496!2sATAURA%20Coworking%20Space!5e0!3m2!1sen!2sin!4v1599882910143!5m2!1sen!2sin"
              title="Video"
              style={{ border: "0" }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
        <Footer />
        Header
      </div>
    );
  }
}

export default Admission;
