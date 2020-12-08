import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import  CartContext  from './context/CartContext';
import Cart from './components/cart';



import './firebase';
import FormCheckout from './components/FormCheckout';

function App() {
 

  return(
    <CartContext>
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Switch>
        <Route exact path="/categoria/:cat">
        <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetail/>
          </Route>
          <Route exact path="/checkout">
            <FormCheckout/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
