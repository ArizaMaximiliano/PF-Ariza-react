import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="navTitle">
                    <a className="navLink" href="#">Tienda</a>
                </div>
                <div className="navList">
                    <ul>
                        <li>
                            <a className="navLink" href="#">Seccion 1</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">Seccion 2</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">
                                <CartWidget/>
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