import React, { Fragment } from "react";
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return(
    <Fragment>
      <NavBar/>
      <ItemListContainer/>
    </Fragment>
  );
}

export default App;
