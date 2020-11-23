import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./stylesComponents.css";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";



export default function ItemDetail() {
  const {add} = useContext(CartContext)
  const [unidades, setUnidades] = useState(1);
  const [products, setProducts] = useState();

  var { id } = useParams();

  useEffect(() => {
    console.log("Params: "+id)
    const db = getFirestore()
    const itemCollection = db.collection("items")
    const whereId = itemCollection.where('title','==',id)

    whereId.get().then((snapshot)=>{
      console.log(snapshot)
      if(snapshot.size === 0){
        console.log("Not Results")
      }
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        setProducts({id: doc.id, ...doc.data()})
      });
      // setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) ))
    })
  }, [products]);


  function sum() {
    if(unidades < products.stock)
    setUnidades(unidades + 1);
  }
  function resta() {
    if (unidades > 1) {
      setUnidades(unidades - 1);
    }
  }


  const handlerAdd = () =>{
    if(products.stock > 0){
      add(products, unidades)
      products.stock = products.stock - unidades 
      console.log(products)
    } else {
      alert("No hay mas stock")
    }
    setUnidades(1)
  }
  console.log(products)
  return (
    <div style={{ padding: "50px", maxWidth: "600px", margin: "10px auto" }}>
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={products.imageId} alt="Imagen del producto"/>
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {products.title}
          </span>
          <hr/>
          <p className="card-title grey-text text-darken-4">Descripcion: {products.description}</p>
          {products.stock > 0 ?<ItemCount unidades={unidades} sum={sum} resta={resta} handlerAdd={handlerAdd} stock={products.stock} product={products}/> : <p>Sin stock</p>}
        </div>
      </div>
    </div> 
  );
}

