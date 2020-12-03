import React, { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import Item from "./Item";
import "./stylesComponents.css";
import { getFirestore } from "../firebase";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [categoria, setCategoria] = useState("Categorias");
  const [reset, setReset] = useState(false);

  /* inicializar segun los valores del desafio */
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("foods");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No hay resultados");
      }
      // querySnapshot.docs.forEach((element) => {
      //   console.log(element.data);
      // });
      setItems(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoad(true);
    });
  }, [reset]);

  function filtroBebidas() {
    setLoad(false);
    const db = getFirestore();
    const itemCollection = db.collection("foods");
    itemCollection
      .where("categoria", "==", "bebida")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
        }

        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCategoria("Bebidas");
        setLoad(true);
      });
  }
  function filtroComidas() {
    setLoad(false);
    const db = getFirestore();
    const itemCollection = db.collection("foods");
    itemCollection
      .where("categoria", "==", "comida")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size == 0) {
          console.log("No hay resultados");
        }

        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCategoria("Comidas");
        setLoad(true);
      });
  }

  return (
    <div>
      {!load ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h3>{categoria}</h3>
            <button
              onClick={() => {
                setReset(!reset);
                setCategoria("Categorias");
              }}
              class="btn-floating waves-effect waves-light red"
            >
              <i class="material-icons">close</i>
            </button>
            <button
              onClick={filtroBebidas}
              class="waves-effect waves-teal btn-flat"
            >
              Bebidas
            </button>
            <button
              onClick={filtroComidas}
              class="waves-effect waves-teal btn-flat"
            >
              Comida
            </button>
          </div>
          <div className="row">
            {items.map((i) => {
              return <Item producto={i} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
