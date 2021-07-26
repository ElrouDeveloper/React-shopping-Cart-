import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import Carte from "../Card/Carte"
const Navbar = () =>
{
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <BrowserRouter>

                    <Link to="/" className="brand-logo">Shopping</Link>

                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>

                </BrowserRouter>
            </div>
        </nav>
    )
}

export default Navbar;