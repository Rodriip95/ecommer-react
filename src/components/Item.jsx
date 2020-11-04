import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './stylesComponents.css'



export default function Item({producto}){
    return(
        <div id="productCard" className="col-2 m-1">
            <h4>{producto.articulo}</h4>
            <p>
                $ {producto.precio}
            </p>
            <Link to={`/${producto.articulo}`}>Ver Producto</Link>
        </div>
    )
}