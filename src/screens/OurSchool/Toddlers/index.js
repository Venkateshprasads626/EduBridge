import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ourSchoolBanner from '../../../assets/ourSchoolBanner.jpg'

class Toddlers extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header id="toddlers-page"/>
                    <div id="page-content">
                        <div>
                            <img src={ourSchoolBanner} className="ourPhilosophyBanner" alt="Image12"/>
                            <div className="innerTextbox">
                                <h1>OUR SCHOOL</h1>
                            </div>
                        </div>
                        <h1 className="philosophyheader">Toddlers - 18 months to 2.5 years</h1>
                        <div className="text-ct">
                            <p>
                                During the toddler age group of 18 months to 3 years, a child is in the 
                                Absorbent Phase. The young toddler’s Absorbent Mind has a 
                                sponge-like capacity to absorb from the environment around.
                            </p>
                            <p>
                                ABODE’s Toddler’s program is designed to provide a child with a prepared 
                                environment enriched with numerous opportunities for the 
                                toddler to evolve into a confident and independent child.
                            </p>
                        </div>
                    </div>
             
                <Footer />
            </div>
        );
    }
}

export default Toddlers