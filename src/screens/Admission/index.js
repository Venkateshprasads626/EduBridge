import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './admission.css'

class Admission extends Component{
    state = {
        name: "",
        email: ""
    }

    onChange= (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div className="getin-touch-form">
                            <form name="contactform2" className="getintouch-form" onSubmit={this.onSubmit}>
                            <input type="hidden" name="form-name" value="contactform2" />
                                <h1 className="form-header">Admission Inquiry 2020-21</h1>
                                <p className="form-header1">
                                    Submit your details for free counselling / campus visit
                                </p>
                                <p>
                                    <select name="role[]" className="drop-down">
                                        <option value="Intreseted In *">Intreseted In*</option>
                                        <option value="Admission in Preschool">Admission in Preschool</option>
                                        <option value="Admission in Elementary">Admission in Elementary</option>
                                    </select>
                                </p>

                                <p>
                                    <select name="role[]" className="drop-down">
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
                                    <select name="role[]" className="drop-down">
                                        <option value="Intreseted In *">Select Campus*</option>
                                        <option value="Newyork">Newyork</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </p>
                                <p>
                                    <input type="text" name="childname" placeholder="Child Name*" onChange={this.onChange} required/>  
                                </p>
                                <p>
                                    <input type="text" name="name" placeholder="Parent Name*" onChange={this.onChange} required/>  
                                </p>

                                <p>
                                    <input type="number" name="number" placeholder="WhatsApp Number*" onChange={this.onChange} required/>
                                </p>

                                <p>
                                    <input type="email" name="email" placeholder="Email Id*" onChange={this.onChange} required/>
                                </p>
                               

                                <p>
                                    <textarea name="message" placeholder="Message*" onChange={this.onChange} required></textarea>
                                </p>
                             
                                <p>
                                    <button type="submit" className="submit-btn2">Submit</button>
                                </p>
                            </form>
                        </div>

                        <div className="contact-banner">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5628303872195!2d77.61543101482161!3d12.935795490879382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144fbf86a7cb%3A0x1bfc14ceeca29496!2sATAURA%20Coworking%20Space!5e0!3m2!1sen!2sin!4v1599882910143!5m2!1sen!2sin"  frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>

                    </div>
                <Footer />
            </div>
        )
    }
}

export default Admission