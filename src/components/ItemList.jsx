import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Spinner from './spinner/Spinner'
import Item from "./Item";
import "./stylesComponents.css";
import { getFirestore } from "../firebase";



export default function ItemList() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);


  /* inicializar segun los valores del desafio */
  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection("foods")
    itemCollection.get().then((querySnapshot)=>{
      // console.log(querySnapshot)
      if(querySnapshot.size == 0){
        console.log("No hay resultados")
      }
      // console.log(querySnapshot.docs)
      querySnapshot.docs.forEach(element => {
        console.log(element.data)
      });
      setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      setLoad(true);
    })

  },[]);

  return (
    <div>
      {!load && (
        <Spinner/>
      )}
      <div className="row">
        {items.map((i) => {
          return <Item producto={i} />;
        })}
      </div>
    </div>
  );
}
