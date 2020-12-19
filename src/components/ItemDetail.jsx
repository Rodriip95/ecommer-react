import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import Images from "./images/images";
import Spinner from "./spinner/Spinner";

export default function ItemDetail({
  products,
  locally,
  addCart,
  unidades,
  handlerAdd,
}) {
  useEffect(()=>{
    console.log(products)
  },[])

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <button
          onClick={() => locally.goBack()}
          style={{
            position: "relative",
            bottom: "-30px",
            right: "-10px",
            zIndex: "5",
          }}
          className="btn-floating waves-effect waves-light red"
        >
          <i className="material-icons">close</i>
        </button>
        <div className="card z-depth-5">
          <div className="card-image waves-effect waves-block waves-light">
            {products.stock > 0 ? (
              <img
                className="activator"
                src={Images[products.imagen]}
                alt="Imagen del producto"
              />
            ) : (
              <img
                style={{ filter: "grayscale(100%)" }}
                className="activator"
                src={Images[products.imagen]}
                alt="Imagen del producto"
              />
            )}
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">
              {products.nombre}: ${products.precio}
            </span>
            <hr />
            <p className="card-title grey-text text-darken-4">
              Descripcion: {products.descripcion}
            </p>
            {products.stock > 0 ? (
              <ItemCount
                addCart={addCart}
                unidades={unidades}
                handlerAdd={handlerAdd}
                stock={products.stock}
                product={products}
              />
            ) : (
              <h2>Sin stock</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
