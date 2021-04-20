import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const ourAddress = [
        {name: "Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Feni, Bangladesh" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Home Cleaning" , link: "/"},
        {name: "Car Cleaning" , link: "/checkup"},
        {name: "AC Cleaning" , link: "/personal-treatment"},
        {name: "Lawn Mowing" , link: "/tooth-extract"},

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    </FooterCol>
                </div>
                <div className="copyRight text-center mb-0 pb-5">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;