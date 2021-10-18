import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ourSchoolBanner from '../../../assets/ourSchoolBanner.jpg'

class Preeschool extends Component{
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
                        <h1 className="philosophyheader">Preeschool - 2.5 to 6 years</h1>
                        <div className="text-ct">
                            <p>
                                0 - 6 yrs is called the 'Sensorial Plane'. During this phase, every 
                                child experiences an innate urge to explore, work, learn and discover 
                                the world around them. This is the most sensitive stage in a child’s life, 
                                an age of explosive learning.
                            </p>
                            <p>
                                At ABODE, we provide an environment to nurture an innate desire to 
                                learn by exploring through their senses.


                            </p>
                        </div>
                    </div>
             
                <Footer />
            </div>
        );
    }
}

export default Preeschool