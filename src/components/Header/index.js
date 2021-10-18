import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends Component{
    render() {
        return(
     
               
                <div className="nav2">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">ABODE</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>
                                <Link className="nav-item dropdown">
                                    <Link className="nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our School
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/OurSchool/Toddlers">Toddlers Program</Link>
                                        <Link className="dropdown-item" to="/OurSchool/Preeschool">Preschool Program</Link>
                                        <Link className="dropdown-item" to="/OurSchool/Elementary">Elementary Program</Link>
                                    </ul>
                                </Link>
                                <Link className="nav-item dropdown">
                                    <Link className="nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our Philosophy
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/OurPhilosophy/Montessori">Montessori</Link>
                                        <Link className="dropdown-item" to="/OurPhilosophy/MultipleIntel">Multiple Intelligence</Link>
                                        <Link className="dropdown-item" to="/OurPhilosophy/HigherIntel">Higher Intelligence</Link>
                                    </ul>
                                </Link>
                              
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Circulam">Circulam</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"></Link>
                                </li>
                                
                                <Link to="/Admission"><button type="button" className="btn admision-btn">Admissions</button></Link>
                            </ul>
                            </div>
                        </div>
                    </nav>
          
                
            </div>
        );
    }
}


export default Header
