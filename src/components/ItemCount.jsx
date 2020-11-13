import React, { useContext, useState } from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


import "./stylesComponents.css";

export default function ItemCount({ stock , product, unidades, sum ,resta ,handlerAdd}) {


  return (
    <>
      <div
        style={{
          margin: "10px 50px",
          display: "flex",
          justifyContent: "center",
        }}>
        <button onClick={resta} style={{ border: "none", backgroundColor: "rgba(255,255,255)" }}>
          <a class="btn-floating waves-effect waves-light red">
            <i class="material-icons">remove</i>
          </a>
        </button>
        <span style={{ margin: "10px 15px", fontSize: "24px", color: "black" }}>
          {unidades}
        </span>
        <button onClick={sum} style={{ border: "none", backgroundColor: "rgba(255,255,255)" }}>
          <a class="btn-floating waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </button>
      </div>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "center" }}
      >
        <button onClick={handlerAdd} class="waves-effect waves-light btn">Agregar al Carrito</button>
      </div>
    </>
  );
}
