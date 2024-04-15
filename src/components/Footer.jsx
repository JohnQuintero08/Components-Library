import React from "react";
import {Link} from 'react-router-dom'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function Footer(){
    const styles ={ 
        textDecoration: 'none',
        color: '#191654',
    }
    return(
        <footer>
            <div className="footer-upper-place">
                <div className="footer-social-media">
                    <h1>BRAND</h1>
                    <p>Text about social media</p>
                    <div className="footer-social-icons">
                        <TiSocialTwitter   className="footer-icon"/>
                        <TiSocialFacebook  className="footer-icon"/>
                        <TiSocialPinterest className="footer-icon" />
                        <TiSocialYoutube   className="footer-icon"/>
                    </div>
                </div>
                <div className="footer-more-options">
                    <h3>MORE FROM THE BRAND</h3>
                    <div className="links-footer">
                        <Link style={styles}>NEWSLETTER</Link>
                        <Link style={styles}>VERIFY SUBSCRIPTION</Link>
                        <Link style={styles}>CONTACT US</Link>
                        <Link style={styles}>CAREERS</Link>
                        <Link style={styles}>CUSTOMER SERVICE</Link>
                    </div>
                </div>
                <div className="footer-more-options">
                <h3>EXPERIENCE THE BRAND</h3>
                    <div className="links-footer">
                        <Link style={styles}>BOOK A SERVICE</Link>
                        <Link style={styles}>FRANCHISE</Link>
                    </div>
                </div>
            </div>
            <div className="footer-policies">
                <p>@ Brand Group 2024</p>
                <Link style={styles}>Cookie Policy</Link>
                <Link style={styles}>Privacy Policy</Link>
                <Link style={styles}>Terms & Conditions</Link>
                <Link style={styles}>Configurator Terms & Conditions</Link>
                <Link style={styles}>Human Rights & Prevention of Modern Slavery</Link>
            </div>
        </footer>
    )
}
export default function Footers(){
    return (
        <div className='page-element'>
            <h1>Footers</h1>
            <h3>Experience the finishing touch of elegance with our website's footer. Crafted with meticulous attention to detail, 
                our footer serves as a sophisticated hub of information and connectivity. 
                From essential links to social media integration, it seamlessly ties together every aspect of your browsing experience. </h3>
            <Footer></Footer>
        </div>
    )
}