import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = (data, e) => {
        e.target.reset();
        const serviceData = {
            name: data.name,
            cost: data.cost,
            imageURL: imageURL
        };

        const url = `http://localhost:5000/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b5ec491a3bbb613ffbae17a8e70d103c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form className="m-5" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" className="form-control" placeholder="Enter Name" required {...register("name")} />
                        <br />
                        <input name="Price" className="form-control" placeholder="Enter Price" required {...register("cost")} />
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Add Service" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;