import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="py-5 text-center" id="serviceSection">
            <h1>Our Services</h1>
            <div className="d-flex container-fluid justify-content-around row align-items-center mx-auto w-100">
                {
                    services.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
        </div>

    );
};

export default Services;