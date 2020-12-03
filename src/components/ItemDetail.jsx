import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import Images from './images/images'
import Spinner from './spinner/Spinner'


export default function ItemDetail() {
  const {add,  addCart} = useContext(CartContext)
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
    <div style={{maxWidth: "600px", margin: "0 auto" }}>
      <button onClick={()=>locally.goBack()} style={{position:"relative", bottom: "-30px", right:"-10px", zIndex:"5"}} class="btn-floating waves-effect waves-light red"><i class="material-icons">close</i></button>
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
        { products.stock > 0 ? <img className="activator" src={Images[products.imagen]} alt="Imagen del producto"/>
        :<img style={{filter: "grayscale(100%)"}} className="activator" src={Images[products.imagen]} alt="Imagen del producto"/>}
          
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {products.nombre}: ${products.precio}
          </span>
          <hr/>
          <p className="card-title grey-text text-darken-4">Descripcion: {products.descripcion}</p>
          {products.stock > 0 ?<ItemCount addCart={addCart} unidades={unidades} handlerAdd={handlerAdd} stock={products.stock} product={products} /> : <h2>Sin stock</h2>}
        </div>
      </div>
    </div>} </>
  );
}

