import React, { Component } from 'react'
import './footer.css'
import social1 from '../../assets/social1.svg'
import social2 from '../../assets/social2.svg'
import social3 from '../../assets/social3.svg'

class Footer extends Component{
    render() {
        return(

            <footer className="page-footer font-small blue pt-4 footer">
            
             
            <div className="container-fluid text-center text-md-left footer1">
          
            
              <div className="row top-footer">
          
              
                <div className="col-md-3 mt-md-0 mt-3">
                    <h4 className="h4-footer">Address</h4>
                    <p className="address-btn"><button type="button" className="btn" style={{backgroundColor:"#FC6467",color:"white"}}><i class="fa fa-map-marker-alt"></i>Newyork</button></p>
                      <p className="add">
                          MIG 29 - 32
                          Opp. DLF 3rd Gate
                          Gachibowli, Hyderabad
                          Ph: 7416056558, 90101 85000
                          Email: abodekids@gmail.com 
                      </p>
                </div>
        
                <div className="col-md-3 mt-md-0 mt-3">
                <h4 className="h4-footer" style={{visibility:"hidden"}}>Address</h4>
                    <p className="address-btn"><button type="button" className="btn" style={{backgroundColor:"#FC6467",color:"white"}}><i class="fa fa-map-marker-alt"></i>Australia</button></p>
                    <p className="add1">
                        86/C, Huda Layout
                        Opp Aparna Sarovar
                        Nallagandla, Hyderabad
                        Ph: 9666448000.
                    </p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />  
                <div className="col-md-3 mt-md-0 mt-3">
                    <h4 className="h4-footer">About Us</h4>
                    <ul className="footer-ul">
                        <li>Our Story</li>
                        <li>Montessori</li>
                        <li>Multiple Intelligence</li>
                        <li>Higher Intelligence</li>
                    </ul>
                </div>
                <div className="col-md-3 mt-md-0 mt-3 social-links">
                <h4 className="h4-footer">Important Links</h4>
                    <ul className="footer-ul">
                        <li>Our Campuses</li>
                        <li>Toddlers Program</li>
                        <li>Preschool Program</li>
                        <li>Elementary Program</li>
                    </ul>
                
                </div>
              </div>
         
            </div>   
            <div className="footer-bottom">
              <p className="footercopy">
                © 2020 Copyright:Created by Venkatesh Prasad
              </p>
            </div>
        
          
          </footer>
        )
    }
}


export default Footer;