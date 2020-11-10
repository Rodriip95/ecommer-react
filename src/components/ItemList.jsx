import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Spinner from './spinner/Spinner'
import Item from "./Item";
import "./stylesComponents.css";

const inventario = new Promise((resolve) => {
  //constructor
  setTimeout(() => {
    resolve([
      {
        id: 1,
        articulo: "Sushi",
        stock: 5,
        stockInicial: 5,
        precio: 600,
        descripcion: "Sushi 12 piezas",
        foto: "http://lorempixel.com/output/food-q-c-600-600-8.jpg",
      },
      {
        id: 2,
        articulo: "Mix Oriental",
        categoria: "Comidas",
        stock: 5,
        stockInicial: 5,
        precio: 300,
        descripcion: "Combinacion de piezas de la cocina oriental",
        foto: "http://lorempixel.com/output/food-q-c-600-600-4.jpg",
      },
      {
        id: 3,
        articulo: "Pollo a la portuguesa",
        categoria: "Comidas",
        stock: 5,
        stockInicial: 5,
        precio: 440,
        descripcion: "Pollo hervido con caldo y verduras",
        foto: "http://lorempixel.com/output/food-q-c-600-600-1.jpg",
      },
      {
        id: 4,
        articulo: "Bife con verduras",
        categoria: "Comidas",
        stock: 5,
        stockInicial: 5,
        precio: 350,
        descripcion: "Carne roja con mix de verduras verdes y tomate",
        foto: "http://lorempixel.com/output/food-q-c-600-600-2.jpg",
      },
      {
        id: 5,
        articulo: "Canelones",
        categoria: "Comidas",
        stock: 5,
        stockInicial: 5,
        precio: 330,
        descripcion: "Pasta rellena con jamon y queso",
        foto: "http://lorempixel.com/output/food-q-c-600-600-3.jpg",
      },
      {
        id: 6,
        articulo: "Burger",
        categoria: "Comidas",
        stock: 5,
        stockInicial: 5,
        precio: 400,
        descripcion: "Hamburguesa con lechuga, tomate y cebolla morada",
        foto: "http://lorempixel.com/output/food-q-c-600-600-9.jpg",
      },
    ]);
  }, 2000);
});

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);


  /* inicializar segun los valores del desafio */
  useEffect(() => {
    inventario.then((i) => {
      setItems(i);
      setLoad(true);
    });
  }, [items]);

  return (
    <div>
      {!load && (
        <Spinner/>
      )}
      <div className="row">
        {items.map((i) => {
          return <Item producto={i} />;
        })}
      </div>
    </div>
  );
}
