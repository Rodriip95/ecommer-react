import React from "react";
import { Link, useHistory } from "react-router-dom";
import CartWidget from "./CartWidget";
import './navbar.css';

function Navbar() {
  const locally = useHistory()
  return (
    <div>
      <nav className="sidenav-trigger" style={{ height: "80px" }}>
        <div className="nav-wrapper" style={{ padding: "10px 50px" }}>
          <span id="miPedidoApp" style={{ padding: "20px 10px" }} onClick={()=>locally.push('/')}>
            Menu
          </span>

          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
