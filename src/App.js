import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';


function App() {
   const inventario = [
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
]



  return(
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Switch>
          <Route path="/item/:id">
            <ItemDetail producto={inventario[0]}/>
          </Route>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
