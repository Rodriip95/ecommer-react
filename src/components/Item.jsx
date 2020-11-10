import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

import "./stylesComponents.css";

export default function Item({ producto }) {
  var { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <img src={producto.foto} />
          <span className="card-title" style={{fontSize: "24px", backgroundColor:"rgba(255, 0, 0, 0.3)", width:"600px", padding:"10px"}}>{producto.articulo}</span>
          <Link to={`/item/${producto.id}`}>
            <button className="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
            </button>
          </Link>
        </div>
        <div className="card-content">
          <p style={{fontSize: "30px", paddingLeft:"10px"}}>$ {producto.precio}</p>
        </div>
        <div class="card-action">
        <Link to={`/item/${producto.id}`}>
            <button className="waves-effect waves-light btn">
            Ver Producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
