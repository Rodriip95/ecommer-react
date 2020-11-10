import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();

export const useCartContect = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart}){
    const [cart, setCart] = useState(defaultCart);

    function add(item){

    }
    function remove(item){
        
    }
    return <CartContext.Provider value={{cart , add , remove}}>
        {children}
    </CartContext.Provider>
}