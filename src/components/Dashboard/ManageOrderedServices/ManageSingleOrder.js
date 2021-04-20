import React from 'react';

const ManageSingleOrder = (props) => {
    const {_id, name, cost, displayName, orderTime,status} = props.order;
    return (
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            <td>{displayName}</td>
            <td>{(new Date(orderTime).toLocaleString("en-IN"))}</td>
            {status ? <td>{status}</td> :  <td>Pending</td> }
            
        </tr>
    );
};

export default ManageSingleOrder;