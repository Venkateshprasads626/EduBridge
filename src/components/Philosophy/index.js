import React, { Component } from 'react';

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
                            <div class="card">
                                <img src={montes} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Montessori</h5>
                                    <h6 class="card-title2">Joy Of Life</h6>
                                    <p class="card-text">
                                        Montessori is an international curriculum that is child-centric, 
                                        hands-on, based on scientific observation of the child’s 
                                        learning process.
                                    </p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={multiple} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Multiple Intelligence</h5>
                                    <h6 class="card-title2">Discover Your Uniqueness</h6>
                                    <p class="card-text">
                                        Every child is exposed to a broad list of activities to 
                                        identify their dominant intelligence.
                                    </p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={higherintel} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Higher Interllihence</h5>
                                    <h6 class="card-title2">Celebrate Your Uniqueness</h6>
                                    <p class="card-text">
                                        A child identified with a higher intelligence is given opportunities to nurture 
                                        and strengthen them.
                                    </p>
                                    <a href="#" class="btn btn-primary">Reacd More</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Philosophy