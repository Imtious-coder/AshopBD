import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <Link className="Name" to="/shop"><h1 id="Name"><span className="Highlight">A</span> shop <span className="Highlight">BD</span></h1></Link>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <nav>
                            <Link to="/shop" className="Destination">Shop</Link>
                            <Link to="/review" className="Destination">Order Review</Link>
                            <Link to="/inventory" className="Destination">Manage Inventory</Link>
                            <button id="SignOutButton" onClick={() => setLoggedInUser({})}>Sign out</button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;