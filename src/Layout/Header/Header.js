import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Link to="/">Starter</Link>
                    </div>  
                    <div className="col-lg-6">
                        <ul className="navbar__wr">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Header;
