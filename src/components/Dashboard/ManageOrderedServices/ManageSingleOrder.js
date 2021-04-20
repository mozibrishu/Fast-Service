import React from 'react';

const ManageSingleOrder = (props) => {
    const {_id, name, price, displayName, orderTime} = props.order;
    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{displayName}</td>
            <td>{(new Date(orderTime).toLocaleString("en-IN"))}</td>
            
        </tr>
    );
};

export default ManageSingleOrder;