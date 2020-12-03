import React from "react";
import { Link } from "react-router-dom";
import Images from "./images/images";

import "./stylesComponents.css";

export default function Item({ producto }) {

  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <Link to={`/item/${producto.id}`}>
            {producto.stock > 0 ? (
              <img
                className="activator"
                src={Images[producto.imagen]}
                alt="Imagen del producto"
              />
            ) : (
              <img
                style={{ filter: "grayscale(100%)" }}
                className="activator"
                src={Images[producto.imagen]}
                alt="Imagen del producto"
              />
            )}
          </Link>
          <span
            className="card-title"
            style={{
              fontSize: "24px",
              backgroundColor: "rgba(255, 0, 0, 0.3)",
              width: "600px",
              padding: "10px",
            }}
          >
            {producto.nombre}
          </span>
        </div>
        <div className="card-content">
          <p style={{ fontSize: "30px", paddingLeft: "10px" }}>
            $ {producto.precio}
          </p>
        </div>
        <div className="card-action">
          <Link to={`/item/${producto.id}`}>
            <button className="waves-effect waves-light btn">
              Ver Producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
