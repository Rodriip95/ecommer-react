import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


function Menu(){
    return(
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <li>
                    <Link to="/">Accesorios</Link>
                </li>
            </li>
            <li className="navbar-item">
                <li>Collares</li>
            </li>
            <li className="navbar-item">
                <li>Relojes</li>
            </li>
        </ul>
    )
}

export default Menu;