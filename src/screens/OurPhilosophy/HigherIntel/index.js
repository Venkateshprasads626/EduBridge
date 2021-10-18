import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ourPhilosophyBanner from '../../../assets/ourPhilosophyBanner.jpg'

class HigherIntel extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                    <div id="page-content">
                        <div>
                            <img src={ourPhilosophyBanner} className="ourPhilosophyBanner" alt="Image12"/>
                            <div className="innerTextbox">
                                <h1>Our Philosophy</h1>
                            </div>
                        </div>
                        <h1 className="philosophyheader">MI - Higher Inteliigence</h1>
                        <div className="text-ct">
                            <p>
                                Dr. Maria Montessori founded the Montessori method in the early 1900s. 
                                Her scientific approach to education was shaped around the individual needs of the child. 
                                The goal was to develop the child and their whole personality.
                            </p>
                            <p>
                                Built on three primary principles – observation, individual freedom, 
                                and preparation of the environment – Montessori classroom is designed as 
                                an environment where children could freely choose from a number of 
                                developmentally appropriate activities.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default HigherIntel