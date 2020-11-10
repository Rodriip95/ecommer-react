import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function Menu() {

  return (
    <>
    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="left hide-on-med-and-down">
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li>Collares</li>
        <li>Relojes</li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Productos</Link>
        </li>
        <li>Collares</li>
        <li>Relojes</li>
      </ul>
    </>
  );
}

export default Menu;
