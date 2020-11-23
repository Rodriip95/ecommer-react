import React, { Fragment, useEffect, useContext } from 'react';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import  CartContext  from './context/CartContext';
import Cart from './components/cat';
import Crud from './components/crud'

import './firebase';

function App() {
 

  return(
    <CartContext>
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Switch>
          <Route path="/item/:id">
            <ItemDetail/>
          </Route>
          <Route path="/crud">
            <Crud/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <ItemListContainer/>
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
