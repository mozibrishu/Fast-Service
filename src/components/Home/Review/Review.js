import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="py-5 text-center" id="reviewSection">
            <h1>Reviews</h1>
            <div className="d-flex container-fluid justify-content-around row align-items-center mx-auto w-100">
                {
                    reviews.map(review => <SingleReview review={review}></SingleReview>)
                }
            </div>
        </div>

    );
};


export default Review;