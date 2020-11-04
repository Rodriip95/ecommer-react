import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import './stylesComponents.css'



export default function ItemDetail({producto}){
    return(
        <div>
            <Link to="/">
                <button className="btn btn-danger">X</button>
            </Link>
            <h4>{producto.articulo}</h4>
            <p>{producto.descripcion}</p>
            <p>
                Precio: $ {producto.precio}
            </p>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}