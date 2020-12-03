import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function ItemCount({ addCart, product, unidades, handlerAdd }) {
  const [cantidad, setCant] = useState(1);
  const [goCart, setGo] = useState(false);

  function restar() {
    if (cantidad > 1) {
      setCant(cantidad - 1);
    }
  }
  function sumar(product) {
    if (cantidad < product.stock) {
      setCant(cantidad + 1);
    }
  }

  function goCartBtn() {
    setGo(true);
  }

  // {sum();sumarStock(product.id, unidades); descontarStock(product.id, unidades)}
  return (
    <>
      <div
        style={{
          margin: "10px 50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={restar}
          style={{ border: "none", backgroundColor: "rgba(255,255,255)" }}
        >
          <a className="btn-floating waves-effect waves-light red">
            <i className="material-icons">remove</i>
          </a>
        </button>
        <span style={{ margin: "10px 15px", fontSize: "24px", color: "black" }}>
          {cantidad}
        </span>
        <button
          onClick={() => sumar(product)}
          style={{ border: "none", backgroundColor: "rgba(255,255,255)" }}
        >
          <a className="btn-floating waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </button>
      </div>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "center" }}
      >
        {!goCart ? (
          <button
            onClick={() => {
              addCart(product, cantidad);
              goCartBtn();
            }}
            className="waves-effect waves-light btn"
          >
            Agregar al Carrito
          </button>
        ) : (
          <Link to="/cart">
            <button className="waves-effect waves-light btn">
              Ir al carrito
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
