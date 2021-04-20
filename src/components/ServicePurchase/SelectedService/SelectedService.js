import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';

const SelectedService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { name, cost } = service;
    let history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data));
    }, [])


    const handleOrder = () => {
        const serviceData = {
            name,
            cost,
            status: "Pending",
            ...loggedInUser,
            orderTime: new Date()
        };
        console.log(serviceData);
        const url = `http://localhost:5000/addOrderService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    history.push("/dashboard");
                }
            })
    }


    return (
        <div className="text-center">
            <h1>{name}</h1>
            <h2>{cost}</h2>
            <button className="btn btn-warning" onClick={() => handleOrder()}>Proceed</button>
        </div>
    );
};

export default SelectedService;