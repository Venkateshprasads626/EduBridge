import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import higherintel from '../../assets/higherintel.jpg';
import montes from '../../assets/montes.jpg';
import multiple from '../../assets/multiple.jpg';


class Philosophy extends Component{
    render() {
        return(
            <div>
                    <div className="Our-program">
                        <h2>Our Philosophy</h2>
                        <p>
                            Our 'Strong Minds' philosophy explores and strengthens their logic, language, and scientific curiosity.
                            The goal of our 'Happy Souls' philosophy is to kindle the uniqueness of each child and celebrate life
                        </p>
                    </div>

                <div className="class-info">
                        <div className="row">
                            <div className="card">
                                <img src={montes} className="card-img-top" alt="Image12" />
                                <div className="card-body">
                                    <h5 className="card-title">Montessori</h5>
                                    <h6 className="card-title2">Joy Of Life</h6>
                                    <p className="card-text">
                                        Montessori is an international curriculum that is child-centric, 
                                        hands-on, based on scientific observation of the child’s 
                                        learning process.
                                    </p>
                                    <Link to="/" className="btn btn-primary">Read More</Link>
                                </div>
                            </div>

                            <div className="card">
                                <img src={multiple} className="card-img-top" alt="Image12" />
                                <div className="card-body">
                                    <h5 className="card-title">Multiple Intelligence</h5>
                                    <h6 className="card-title2">Discover Your Uniqueness</h6>
                                    <p className="card-text">
                                        Every child is exposed to a broad list of activities to 
                                        identify their dominant intelligence.
                                    </p>
                                    <Link to="/" className="btn btn-primary">Read More</Link>
                                </div>
                            </div>

                            <div className="card">
                                <img src={higherintel} className="card-img-top" alt="Image12" />
                                <div className="card-body">
                                    <h5 className="card-title">Higher Interllihence</h5>
                                    <h6 className="card-title2">Celebrate Your Uniqueness</h6>
                                    <p className="card-text">
                                        A child identified with a higher intelligence is given opportunities to nurture 
                                        and strengthen them.
                                    </p>
                                    <Link to="/" className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Philosophy