import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import CartWidget from "./CartWidget";
import Menu from "./Menu";

function Navbar() {
  return (
    <div>
      <nav className="sidenav-trigger" style={{ height: "80px" }}>
        <div className="nav-wrapper" style={{ padding: "10px 50px" }}>
          <a href="#!" className="brand-logo">
            MiPedidoApp
          </a>
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

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li><Link to="/crud">
                CRUD
            </Link>
        </li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
