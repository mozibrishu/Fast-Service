import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SingleService from './SingleService';


const OrderedService = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/orderedService?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h1 className="text-center">{loggedInUser.displayName}'s Orders</h1>
            <table className="container table">
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <SingleService order={order}></SingleService>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default OrderedService;