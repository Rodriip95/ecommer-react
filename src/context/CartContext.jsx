import React, { createContext, useContext, useState } from "react";


export const CartContext = createContext();

export const useCartContect = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [unidades, setUnidades] = useState(0);


  function removeAll(){
    setTotal(0)
    setCart([])
    setUnidades(0)
  }

  function removeCart(item) {
    setTotal(total-(item.precio*item.cantidad))
    setCart(cart.filter((e) => e.id !== item.id))
    setUnidades(unidades-item.cantidad)
  }

  function addCart(item, cantidad){
    item.cantidad = cantidad
    if(cart.length === 0){
      setTotal(total+(item.precio*cantidad))
      setUnidades(item.cantidad)
      return setCart([...cart, item])
    } 
    else {
      let esta = false;
      cart.forEach((p) => {
        if (p.id === item.id) {esta = true}
      })
      if (!esta) {
        setTotal(total+(item.precio*cantidad))
        setUnidades(unidades+item.cantidad)
        return setCart([...cart, item])
      } 
      else {
        let arrNuevo = cart;
        let totalNuevo=total;
        arrNuevo.map((p) => {
          if (p.id === item.id) {
            setUnidades(unidades-p.cantidad+cantidad)
            totalNuevo = totalNuevo - (p.cantidad*p.precio)
            p.cantidad = item.cantidad
          }
        })
        setTotal(totalNuevo+(item.precio*cantidad))
        return setCart(arrNuevo)
      }
    }
  }



  return (
    <CartContext.Provider value={{ addCart, total, cart, unidades,  removeCart, removeAll }}>
      {children}
    </CartContext.Provider>
  );
}
