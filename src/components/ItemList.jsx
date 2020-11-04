import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Item from './Item';
import './stylesComponents.css'

const inventario = new Promise(resolve => {
  //constructor
  setTimeout(() => {
    resolve([
        {
            id: 1,
            articulo: "Gorra",
            stock: 5,
            stockInicial: 5,
            precio: 450,
            descripcion: "Esta es la descripcion del articulo Gorra"
          },
          {
            id: 2,
            articulo: "Cadenas",
            stock: 5,
            stockInicial: 5,
            precio: 250,
            descripcion: "Esta es la descripcion del articulo Gorra"
          },
          {
            id: 3,
            articulo: "Reloj",
            stock: 5,
            stockInicial: 5,
            precio: 700,
            descripcion: "Esta es la descripcion del articulo Reloj"
          },
          {
            id: 4,
            articulo: "Pulseras",
            stock: 5,
            stockInicial: 5,
            precio: 200,
            descripcion: "Esta es la descripcion del articulo Pulsera"
          },
          {
            id: 5,
            articulo: "Billetera",
            stock: 5,
            stockInicial: 5,
            precio: 330,
            descripcion: "Esta es la descripcion del articulo Billetera"
          }
    ]);
  }, 2000);
});


export default function ItemList(){
    const [items, setItems] = useState([]);
    /* inicializar segun los valores del desafio */
    useEffect(() => {
        inventario.then(i => setItems(i));
    }, [items]);


    return(
        <div className="row mx-auto">
            {items.map(i => {
                return (
                    <Item producto={i}/>
                );
                })
            }
        </div>
    )
}