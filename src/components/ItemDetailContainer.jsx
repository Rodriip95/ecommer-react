import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import Spinner from "./spinner/Spinner";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { add, addCart } = useContext(CartContext);
  const [unidades, setUnidades] = useState(1);
  const [products, setProducts] = useState({});
  const [load, setLoad] = useState(false);
  const locally = useHistory();

  var { id } = useParams();

  useEffect(() => {
    setLoad(false);

    const db = getFirestore();
    const itemCollection = db.collection("foods");
    const item = itemCollection.doc(id);

    item.get().then((snapshot) => {
      if (!snapshot.exists) {
        console.log("Not Results");
      }
      setProducts({ id: snapshot.id, ...snapshot.data() });
      setLoad(true);
      // setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) ))
    });
  }, [id]);

  const handlerAdd = () => {
    if (products.stock > 0) {
      add(products, unidades);
      products.stock = products.stock - unidades;
    } else {
      alert("No hay mas stock");
    }
    setUnidades(1);
  };

  return (
    <>
      {!load ? (
        <Spinner />
      ) : (
        <>
          <ItemDetail
            products={products}
            locally={locally}
            addCart={addCart}
            unidades={unidades}
            handlerAdd={handlerAdd}
          />
        </>
      )}
    </>
  );
}
