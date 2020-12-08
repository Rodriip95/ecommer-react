import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import Spinner from "./spinner/Spinner";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const { cat } = useParams();

  useEffect(() => {
    setLoad(false);
    const db = getFirestore();
    const itemCollection = db.collection("foods");
    if (cat) {
      itemCollection
        .where("categoria", "==", `${cat.slice(0, -1)}`)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No hay resultados");
          }
          setItems(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoad(true);
        });
    } else {
        itemCollection.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No hay resultados");
          }
          setItems(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          setLoad(true);
        });
    }  
  }, [cat]);

  return (
    <div className="container">
      <h2
        style={{ textAlign: "center", margin: "20px" }}
        className="card-title"
      >
        Realiza tu pedido!
      </h2>
      {!load ? (
        <Spinner />
      ) : (
      <ItemList items={items} />
      )}
    </div>
  );
}
