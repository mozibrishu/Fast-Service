import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/service">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        {loggedInUser.email && <Link to="/home" className="mr-3 text-dark nav-link">{loggedInUser.displayName}</Link>}
                    </li>
                    <li>
                        {loggedInUser.email ? <Link to="/login" onClick={() => setLoggedInUser({})} className="cursorPointer mr-3 text-dark nav-link">Sign out</Link> :
                            <Link to="/login" className="cursorPointer mr-3 text-dark nav-link">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;