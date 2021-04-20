import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderedService from '../OrderedService/OrderedService';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <OrderedService></OrderedService>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;