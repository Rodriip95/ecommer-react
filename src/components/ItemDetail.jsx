import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./stylesComponents.css";
import { CartContext } from "../context/CartContext";

const inventario = [
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
    precio: 430,
    descripcion: "Hamburguesa con lechuga, tomate y cebolla morada",
    foto: "http://lorempixel.com/output/food-q-c-600-600-9.jpg",
  },
];

export default function ItemDetail() {
  const {add} = useContext(CartContext)
  const [unidades, setUnidades] = useState(1);
  const [products, setProducts] = useState(inventario);

  var { id } = useParams();

  useEffect(() => {
    setProducts(products[id - 1]);
  }, [inventario]);


  function sum() {
    if(unidades < products.stock)
    setUnidades(unidades + 1);
  }
  function resta() {
    if (unidades > 1) {
      setUnidades(unidades - 1);
    }
  }


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

  return (
    <div style={{ padding: "50px", maxWidth: "600px", margin: "10px auto" }}>
      <div className="card z-depth-5">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={products.foto} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">
            {products.articulo}
          </span>
          <hr/>
          <p className="card-title grey-text text-darken-4">Descripcion: {products.descripcion}</p>
          {products.stock > 0 ?<ItemCount unidades={unidades} sum={sum} resta={resta} handlerAdd={handlerAdd} stock={products.stock} product={products}/> : <p>Sin stock</p>}
        </div>
      </div>
    </div>
  );
}

