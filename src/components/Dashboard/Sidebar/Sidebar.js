import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Dashboard</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/ManageOrderServices" className="text-white">
                            <span>All Ordered Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                             <span>Add Admin</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/addService" className="text-white" >
                             <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                             <span>Manage Services</span>
                        </Link>
                    </li>
                </div>}
                <li>
                    <Link to="/addReview" className="text-white">
                        <span>Add Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;