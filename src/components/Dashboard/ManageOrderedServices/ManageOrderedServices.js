import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageSingleOrder from './ManageSingleOrder';

const ManageOrderedServices = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(response => response.json())
            .then(data => setOrders(data));
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
                    orders.map(order => <ManageSingleOrder order={order}></ManageSingleOrder>)
                }
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageOrderedServices;