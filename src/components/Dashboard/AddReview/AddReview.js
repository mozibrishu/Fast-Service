import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        const reviewData = {
            ...loggedInUser,
            review: data.review
        };
        const url = `http://localhost:5000/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };



    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                        <textarea className="form-control" placeholder="Review" required {...register("review")}></textarea>
                        <br />
                        <input type="submit" className="btn btn-primary" value="Post Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;