import React,{ Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Slide2} class="" alt="..." />
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src={Slide3} class="" alt="..." />
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src={Slide4} class="" alt="..." />
                                    
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
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
                            <div className="card">
                                <img src={Toddler} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Toddlers</h5>
                                    <h6 className="card-title2">18 months - 2 1/2 years</h6>
                                    <p className="card-text">
                                        In this absorbent phase, our goal is to create opportunities for the child to explore and 
                                        grow as a confident and independent toddler.
                                    </p>
                                    <Link to="/OurSchool/Toddlers#toddlers-page" className="btn btn-primary">Discover Toddlers Program</Link>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Preeschool} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Preeschool</h5>
                                    <h6 className="card-title2">2 1/2 years to 6 years</h6>
                                    <p className="card-text">
                                        During this sensitive phase, every child experiences an innate urge to discover 
                                        the world around them. We provide an enriched environment where learning 
                                        happens organically.
                                    </p>
                                    <Link to="/" className="btn btn-primary">Discover Preeschool Program</Link>
                                </div>
                            </div>

                            <div className="card">
                                <img src={Elementory} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Elementary</h5>
                                    <h6 className="card-title2">Grade 1 to 6</h6>
                                    <p className="card-text">
                                        We cultivate our child’s imagination, reasoning skills and social development by providing small group lessons.
                                    </p>
                                    <Link to="/" className="btn btn-primary">Discover Elementary Program</Link>
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