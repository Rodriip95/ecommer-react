import React from 'react';
import './stylesComponents.css'



export default function Item({producto}){
    return(
        <div id="productCard" className="col-2 m-1">
            <h4>{producto.articulo}</h4>
            <p>
                $ {producto.precio}
            </p>
            <a href="#!" class="btn btn-primary">Ver Producto</a>
        </div>
    )
}