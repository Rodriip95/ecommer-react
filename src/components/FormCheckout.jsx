import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase";
import Swal from "sweetalert";
import { useHistory } from "react-router-dom";

function validarMail(elemento) {
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (regex.test(elemento)) {
    return true;
  } else {
    return false;
  }
}

export default function FormCheckout() {
  const [userInfo, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const { total, cart, removeAll } = useContext(CartContext);
  const locally = useHistory();

  useEffect(() => {
    validarMail(userInfo.email);
  }, [userInfo]);

  function handleChange(e) {
    setInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const db = getFirestore();
    db.collection("orders")
      .add({
        userInfo,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,
        cart: cart,
      })
      .then(function (docRef) {
        Swal(
          "Pedido Realizado!",
          `Comprobante de orden N° ${docRef.id}`,
          "success"
        );
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    cart.forEach((doc) => {
      db.collection("foods")
        .doc(doc.id)
        .update({
          ...doc,
          stock: doc.stock - doc.cantidad,
          cantidad: firebase.firestore.FieldValue.delete(),
        })
        .then(function () {
          console.log("Producto Actualizado!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
    removeAll();
    locally.push("/");
  }

  return (
    <div className="container">
      <h1>Completar compra</h1>
      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="input-field col s6 m6">
            <input
              id="name"
              name="name"
              onChange={handleChange}
              value={userInfo.name}
              type="text"
              className="validate"
            />
            <label htmlFor="stock">Nombre</label>
          </div>
          <div className="input-field col s6 m6">
            <input
              id="phone"
              type="text"
              name="phone"
              onChange={handleChange}
              value={userInfo.phone}
              className="validate"
            />
            <label htmlFor="phone">Telefono</label>
          </div>
          <div className="input-field col s12 m12">
            <input
              id="email"
              name="email"
              type="text"
              onChange={handleChange}
              value={userInfo.email}
              className="validate"
            />
            <label htmlFor="email">Mail</label>
            {!validarMail(userInfo.email) && (
              <p style={{ color: "rgba(255,50,50,0.8)" }}>
                Ingrese el mail correctamente
              </p>
            )}
          </div>
          <div className="input-field col s12 m12">
            <input
              style={
                userInfo.email === userInfo.confirmEmail
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "rgba(238,110,115,0.3)" }
              }
              id="confirmEmail"
              name="confirmEmail"
              type="text"
              onChange={handleChange}
              value={userInfo.confirmEmail}
              className="validate"
            />
            <label htmlFor="confirmEmail">Confirmar Mail</label>
            {userInfo.email !== userInfo.confirmEmail && (
              <p style={{ color: "rgba(255,50,50,0.8)" }}>
                Los mails no coinciden
              </p>
            )}
          </div>
          <div style={{ marginLeft: "10px" }}>
            <button
              disabled={
                userInfo.email !== userInfo.confirmEmail ||
                userInfo.email === ""
              }
              type="submit"
              className="btn"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
