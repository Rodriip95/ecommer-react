import React, { Fragment, useEffect, useContext } from 'react';
import {BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import  CartContext  from './context/CartContext';


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
