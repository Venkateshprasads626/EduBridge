import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ourSchoolBanner from '../../../assets/ourSchoolBanner.jpg'

class Elementary extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div>
                            <img src={ourSchoolBanner} className="ourPhilosophyBanner" alt="Image12"/>
                            <div className="innerTextbox">
                                <h1>OUR SCHOOL</h1>
                            </div>
                        </div>
                        <h1 className="philosophyheader">Elementary - 6 to 12 years</h1>
                        <div className="text-ct">
                            <p>
                                From 6 - 12 years of age, the child is in the "Knowledge Phase". During this phase, a 
                                child has a natural inclination for abstraction and intellectual activity.
                            </p>
                            <p>
                                At ABODE, we believe that collaboration and cooperation is 
                                the key to human evolution, and we nurture that every day in our children.
                            </p>
                            <p>
                                As per our methodology every child learns through the three stages of learning.

                            </p>
                        </div>
                    </div>
             
                <Footer />
            </div>
        );
    }
}

export default Elementary