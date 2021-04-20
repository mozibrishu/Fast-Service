import React from 'react';

const SingleService = (props) => {
    const { name, cost } = props.order;

    return (
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            <td>status</td>
        </tr>
    );
};

export default SingleService;