import React from 'react';
import image from '../../../images/cleaningService.jpg'

const Header = () => {
    return (
        <div style={{ backgroundColor: '#80b5db' }} className=" d-flex justify-content-between align-items-center">
            <div className="col-md-7 py-5 px-4" style={{ height: "100vh" }}>
                <img style={{ width: "100%" }} src={image} alt="" srcset="" />
            </div>
            <div className="col-md-5 ">
                <h1>Fast Service</h1>
                <h3>Your Trusted Service Provider</h3>
                <a href="#serviceSection"><button className="btn btn-primary">Choose A Service</button></a>
                
            </div>
        </div>
    );
};

export default Header;