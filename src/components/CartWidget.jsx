import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { unidades, cart } = useContext(CartContext);

  useEffect(() => {
    console.log(unidades)
  }, [cart]);

  return (
    <>
      <a className="btn-floating btn-large waves-effect waves-light red right">
        <i className="material-icons">shopping_basket</i>
      </a>
      {cart.length > 0 && (
        <button
          style={{
            position: "relative",
            bottom: "-40px",
            right: "-70px",
            zIndex: "5",
            float: "right",
            background: "white",
          }}
          className="btn-floating waves-effect waves-light"
        >
          <span style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "black" 
          }}>
            {unidades}
          </span>
        </button>
      )}
    </>
  );
}

