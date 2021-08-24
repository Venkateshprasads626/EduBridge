import React,{ Component } from 'react'
import './home.css'
import Header from '../../components/Header'
import Slide2 from '../../assets/Slide2.svg';
import Slide3 from '../../assets/Slide3.svg';
import Slide4 from '../../assets/Slide4.svg';
import Toddler from '../../assets/Toddler.svg'
import Preeschool from '../../assets/Preeschool.svg'
import Elementory from '../../assets/Elementory.svg'
import Philosophy from '../../components/Philosophy';
import Footer from '../../components/Footer';


class Home extends Component{
    render() {
        return(
            <div id="site-warpper">
               <Header />
                <div id="page-content">
                    <div className="Image-slider">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Slide2} class="" alt="..." />
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src={Slide3} class="" alt="..." />
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src={Slide4} class="" alt="..." />
                                    
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="Our-program">
                        <h2>Our Programs</h2>
                        <p>
                            At ABODE, we encourage each child to explore and learn with freedom and responsibility. 
                            Every child is supported by a prepared environment and nurturing adults to realize their 
                            full potential and grow into confident self-learners.
                        </p>
                    </div>

                    <div className="class-info">
                        <div className="row">
                            <div class="card">
                                <img src={Toddler} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Toddlers</h5>
                                    <h6 class="card-title2">18 months - 2 1/2 years</h6>
                                    <p class="card-text">
                                        In this absorbent phase, our goal is to create opportunities for the child to explore and 
                                        grow as a confident and independent toddler.
                                    </p>
                                    <a href="#" class="btn btn-primary">Discover Toddlers Program</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={Preeschool} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Preeschool</h5>
                                    <h6 class="card-title2">2 1/2 years to 6 years</h6>
                                    <p class="card-text">
                                        During this sensitive phase, every child experiences an innate urge to discover 
                                        the world around them. We provide an enriched environment where learning 
                                        happens organically.
                                    </p>
                                    <a href="#" class="btn btn-primary">Discover Preeschool Program</a>
                                </div>
                            </div>

                            <div class="card">
                                <img src={Elementory} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Elementary</h5>
                                    <h6 class="card-title2">Grade 1 to 6</h6>
                                    <p class="card-text">
                                        We cultivate our child’s imagination, reasoning skills and social development by providing small group lessons.
                                    </p>
                                    <a href="#" class="btn btn-primary">Discover Elementary Program</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Segment3">
                        <Philosophy />
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}


export default Home