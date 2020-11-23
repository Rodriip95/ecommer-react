import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function Cart(){
    const {cart} = useContext(CartContext)

    return(
        <div className="container">
                <table>
        <thead>
          <tr>
          <th>Foto</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
          </tr>
        </thead>
        <tbody>
            {cart.map((pro)=>(
                <tr>
                <td><img style={{maxWidth:"150px"}} src={pro.imageId}/></td>
                <td>{pro.title}</td>
                <td>{pro.cantidad}</td>
                <td>$ {pro.price}</td>
              </tr>
            ))}
        </tbody>
        </table>
        </div>
    )
}

export default Cart;