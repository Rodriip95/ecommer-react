import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./stylesComponents.css";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import Images from './images/images'
import Spinner from './spinner/Spinner'




export default function ItemDetail() {
  const {add, descontarStock, sumarStock, addCart} = useContext(CartContext)
  const [unidades, setUnidades] = useState(1);
  const [products, setProducts] = useState({});
  const [load, setLoad] = useState(false)
  const locally = useHistory()

  var { id } = useParams();

  useEffect(() => {
    setLoad(false)
    console.log("Params: "+id)
    const db = getFirestore()
    const itemCollection = db.collection("foods")
    const item = itemCollection.doc(id)

    item.get().then((snapshot)=>{
      console.log(snapshot)
      if(!snapshot.exists){
        console.log("Not Results")
      }
      setProducts({id: snapshot.id, ...snapshot.data()})
      setLoad(true)
      // setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) ))
    })
  }, [id]);


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
    <>
    {!load? (
        <Spinner/>
      ):
    <div style={{ padding: "50px", maxWidth: "600px", margin: "10px auto" }}>
      <button onClick={()=>locally.goBack()} style={{position:"relative", bottom: "-30px", right:"-10px", zIndex:"5"}} class="btn-floating waves-effect waves-light red"><i class="material-icons">close</i></button>
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Images[products.imagen]} alt="Imagen del producto"/>
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {products.nombre}: ${products.precio}
          </span>
          <hr/>
          <p className="card-title grey-text text-darken-4">Descripcion: {products.descripcion}</p>
          {products.stock > 0 ?<ItemCount addCart={addCart} descontarStock={descontarStock} unidades={unidades} sum={sum} resta={resta} handlerAdd={handlerAdd} stock={products.stock} product={products} sumarStock={sumarStock}/> : <p>Sin stock</p>}
        </div>
      </div>
    </div>} </>
  );
}

