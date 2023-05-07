import './navBar.css'

import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="navTitle">
                    <NavLink className="navLink" to="/">Tienda</NavLink>
                </div>
                <div className="navList">
                    <ul>
                        <li>
                            <NavLink className="navLink" to="/categoria/guitarras">Guitarras</NavLink>
                        </li>
                        <li>
                            <NavLink className="navLink" to="/categoria/pianos">Pianos</NavLink>
                        </li>
                        <li>
                            <a className="navLink" href="#">
                                <CartWidget />
                                <span>1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;