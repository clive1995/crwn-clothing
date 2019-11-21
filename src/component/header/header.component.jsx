import React from 'react';
import { Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { auth } from "../firebase/firebase.utils";

const Header = (props) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo-container">
            </Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/" >Contact</Link>
            {
                props.siginprop ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :


                    <Link className="option" to="/signin">Sign IN</Link>
            }
        </div>
    </div>
)

export default Header;