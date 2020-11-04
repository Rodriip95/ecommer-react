import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return(
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Switch>
          <Route path="/Gorra">
            <ItemDetail producto={{
              id: 1,
              articulo: "Gorra",
              stock: 5,
              stockInicial: 5,
              precio: 450,
              descripcion: "Esta es la descripcion del articulo Gorra"
            }}/>
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
