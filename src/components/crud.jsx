import React, { useState } from "react";

import Load from './load'


function Crud() {
    const [producto, setProducto] = useState({})

    const handlerChange = (e) =>{
        setProducto({...producto, [e.target.name]: e.target.value})
    }
    


    

  return (
    <div className="container">
      <h1>CRUD de Producto</h1>
      <div className="row">
        <form className="col s12">
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
            <Load nuevoProducto={producto}/>
        </form>
      </div>
    </div>
  );
}

export default Crud;
