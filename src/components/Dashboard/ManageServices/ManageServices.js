import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleService from './SingleService';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order By</th>
                        <th scope="col">Time</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    services.map(service => <SingleService service={service}></SingleService>)
                }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageServices;