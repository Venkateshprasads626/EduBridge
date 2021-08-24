import React, { Component } from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component{
    render() {
        return(
     
               
                <div className="nav2">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">ABODE</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                               
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our School</a>
                                </li>
                                <Link class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our Philosophy
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link class="dropdown-item" to="/OurPhilosophy/Montessori">Montessori</Link>
                                        <Link class="dropdown-item" to="/OurPhilosophy/MultipleIntel">Multiple Intelligence</Link>
                                        <Link class="dropdown-item" to="/OurPhilosophy/HigherIntel">Higher Intelligence</Link>
                                    </ul>
                                </Link>
                              
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Gallery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Circulam</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"></a>
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
