import React from 'react'
import logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import "./HeaderLogin.css";

const HeaderLogin = () => {
    return (
        <div className="login-header">
            <div>
                <Link to={'/'}>
                    <img className='header-logo' src={logo} alt="Futura Labs" />
                </Link>
            </div>
            <div className='support'>
                Support: 0000 00 00 00
            </div>
        </div>
    )
}

export default HeaderLogin