import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const SingleService = (props) => {
    const { _id, name, cost,imageURL } = props.service;
    return (
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-3 text-center service-card-container">
                <div className="service-card">
                    <img className="serviceImage" src={imageURL} alt="" srcset="" />
                    <p>{name}</p>
                    <h4>${cost}</h4>
                    <Link to={`/selectedService/${_id}`}>
                        <button className="btn btn-primary">Select</button>
                    </Link>
                </div>

            </div>
    );
};

export default SingleService;