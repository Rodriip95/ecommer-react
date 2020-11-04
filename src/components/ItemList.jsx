import React, { useEffect, useState } from 'react';
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
            precio: 450
          },
          {
            id: 2,
            articulo: "Cadenas",
            stock: 5,
            stockInicial: 5,
            precio: 250
          },
          {
            id: 3,
            articulo: "Reloj",
            stock: 5,
            stockInicial: 5,
            precio: 700
          },
          {
            id: 4,
            articulo: "Pulseras",
            stock: 5,
            stockInicial: 5,
            precio: 200
          },
          {
            id: 5,
            articulo: "Billetera",
            stock: 5,
            stockInicial: 5,
            precio: 330
          }
    ]);
  }, 2000);
});


export default function ItemList(){
    const [items, setItems] = useState([]);
    /* inicializar segun los valores del desafio */
    useEffect(() => {
        inventario.then(i => setItems(i));
    }, []);


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