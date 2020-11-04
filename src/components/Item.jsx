import React from 'react';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';

import './stylesComponents.css'



export default function Item({producto}){
    const {id} = useParams();
    return(
        <div id="productCard" className="col-2 m-1">
            <h4>{producto.articulo}</h4>
            <p>
                $ {producto.precio}
            </p>
            <Link to={`/item/${producto.id}`}>Ver Producto</Link>
        </div>
    )
}