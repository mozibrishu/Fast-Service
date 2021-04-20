import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const SingleReview = (props) => {
    const {  displayName, image,review } = props.review;
    return (
            <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-3 text-center review-card-container">
                <div className="review-card">
                    <img className="reviewImage" style={{ height: '70px',width: '70px'}} src={image} alt="" srcset="" />
                    <h6>{displayName}</h6>
                    <p>{review}</p>
                </div>

            </div>
    );
};

export default SingleReview;