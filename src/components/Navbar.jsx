import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Link, useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";
import './navbar.css';

function Navbar() {
  const locally = useHistory()
  return (
    <div>
      <nav className="sidenav-trigger" style={{ height: "80px" }}>
        <div className="nav-wrapper" style={{ padding: "10px 50px" }}>
          <button id="miPedidoApp" onClick={()=>locally.push('/')} className="aves-effect waves-teal btn-flat">
            Menu
          </button>

          <Link to="/cart">
            <CartWidget />
          </Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Productos</Link>
            </li>
            <li>
            <Link to="/crud">
                CRUD
            </Link>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
