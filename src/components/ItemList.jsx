import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./stylesComponents.css";
// import { getFirestore } from "../firebase";

export default function ItemList({items}) {


  return (
    <>
          <div>
            <h3>Categorias</h3>
            <Link to="/">
            <button
              className="btn-floating waves-effect waves-light red"
            >
              <i className="material-icons">close</i>
            </button>
            </Link>
            <Link to="/categoria/bebidas">
            <button
              className="waves-effect waves-teal btn-flat"
            >
              Bebidas
            </button>
            </Link>
            <Link to="/categoria/comidas">
            <button
              className="waves-effect waves-teal btn-flat"
            >
              Comidas
            </button>
            </Link>
          </div>
          <div className="row">
            {items.map((i) => (
              <Item producto={i}/>
            ))}
          </div>
        
    </>
  );
}
