import React, { Component } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ourPhilosophyBanner from '../../../assets/ourPhilosophyBanner.jpg'

class Montessori extends Component{
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
                        <h1 className="philosophyheader">Montessori</h1>
                        <div className="text-ct">
                            <p>
                                ABODE believes in multiple intelligences theory. Every child is exposed to a broad 
                                list of activities to identify their dominant intelligence in our school. 
                                MI theory suggests that no one set of teaching strategies will work best 
                                for all students at all times. All children have different proclivities 
                                in the eight intelligences, so any particular strategy is likely to be 
                                successful with several students, and yet, not for others.
                            </p>
                            <p>
                                Our MI program allows the child to explore different intelligence’s until 6/7 years of age. 
                                The curriculum is designed to align with international music, classical music, 
                                dance, gymnastics, art, and kinetics programs.
                            </p>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}


export default Montessori