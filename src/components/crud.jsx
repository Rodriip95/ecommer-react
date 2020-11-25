import React, { useState } from "react";
import {getFirestore} from '../firebase'
import * as firebase from 'firebase/app'
import 'firebase/firestore'


function Crud() {
    const [producto, setProducto] = useState({})

    const cargarProducto= (e) =>{
        e.preventDefault()
        const newProducts = {
          title : producto.title,
          description : producto.description,
          stock : producto.stock,
          price : producto.price,
        }
        const db = getFirestore()
        const product= db.collection('items')
        
        product.add(newProducts).then((doc)=>{
          console.log("Add task "+doc)
        })
        .catch(err => 
          console.log("Error task")
        )
    }

    const handlerChange = (e) =>{
        setProducto({...producto, [e.target.name]: e.target.value})
    }

    

  return (
    <div className="container">
      <h1>CRUD de Producto</h1>
      <div className="row">
        <form onSubmit={cargarProducto} className="col s12">
          <div className="input-field col s12 m12">
            <input onChange={handlerChange} id="titulo" name="titulo" type="text" className="validate" />
            <label htmlFor="titulo">Titulo</label>
          </div>
          <div className="input-field col s12 m12">
            <input onChange={handlerChange} id="descripcion" name="descripcion" type="text" className="validate" />
            <label htmlFor="descripcion">Descripcion</label>
          </div>
          <div className="input-field col s6 m6">
            <input onChange={handlerChange} id="stock" name="stock" type="number" className="validate" />
            <label htmlFor="stock">Stock</label>
          </div>
          <div className="input-field col s6 m6">
            <input onChange={handlerChange} id="precio" type="number" name="number" className="validate" />
            <label htmlFor="precio">Precio</label>
          </div>
          <button style={{margin:"20px 10px"}} type="submit" className="waves-effect waves-light btn">Cargar</button>
        </form>
      </div>
    </div>
  );
}

export default Crud;
