import React from 'react';

const SingleService = (props) => {
    const {_id, name, cost} = props.service;

    function deleteOrder(event, id) {
        console.log(_id);
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.parentNode.style.display = 'none';
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            <td><button className="btn btn-danger" onClick={(event) => deleteOrder(event,`${_id}`)}>Delete</button></td>
        </tr>
    );
};

export default SingleService;