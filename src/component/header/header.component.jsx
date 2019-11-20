import React from 'react';
import { Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";

const Header =() =>(
    <div className="header">
        <Link to="/">
            <Logo className="logo-container">
            </Logo>
        </Link>
        <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/" >Contact</Link>
        </div>
    </div>
)

export default Header;