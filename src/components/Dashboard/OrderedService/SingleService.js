import React from 'react';

const SingleService = (props) => {
    const { name, cost,status } = props.order;

    return (
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            {status ? <td>{status}</td> :  <td>Pending</td> }
        </tr>
    );
};

export default SingleService;