import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        const adminData = {
            email: data.email
        };
        const url = `http://localhost:5000/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
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
                        <input name="email" className="form-control" placeholder="Enter Email" required {...register("email")} />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Add Admin" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;