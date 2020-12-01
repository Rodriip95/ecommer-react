import React, { createContext, useContext, useState } from "react";
import { getFirebase, getFirestore } from "../firebase";

export const CartContext = createContext();

export const useCartContect = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {
  const [cart, setCart] = useState([]);
  

  function sumarStock(id, cantidad = 1) {
    const db = getFirestore()
    var foodCollection = db.collection("foods").doc(id)
    foodCollection.get().then(doc =>{
        if(doc.data().stock > doc.data().stockInicial){
            foodCollection.update({stock: doc.data().stock + cantidad}).then(()=>{
                console.log("Document successfully updated!")
            }).catch(error => console.error("Error updating document: ", error))
        } else {
            console.log("Stock empty")
        }
    }).catch(error => console.error("Error updating document: ", error))
  }

  

  function removeCart(item) {
    setCart(cart.filter((e) => e.id !== item.id))
  }

  function addCart(item, cantidad){
    item.cantidad = cantidad
    if(cart.length === 0){return setCart([...cart, item])} 
    else {
      let esta = false;
      cart.forEach((p) => {
        if (p.id === item.id) {esta = true}
      })
      if (!esta) {return setCart([...cart, item])} 
      else {
        let arrNuevo = cart;
        arrNuevo.map((p) => {
          if (p.id === item.id) {p.cantidad = item.cantidad}
        })
        return setCart(arrNuevo)
      }
    }
  }



  return (
    <CartContext.Provider value={{ addCart, cart,  removeCart, sumarStock }}>
      {children}
    </CartContext.Provider>
  );
}
