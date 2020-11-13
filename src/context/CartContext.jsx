import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();

export const useCartContect = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart}){
    const [cart, setCart] = useState([]);


    function add(item, cant = 1){
        console.log(cant)
        console.log(cart)
        if(cart.length === 0){
            var primerItem;
            if (cant > 1){
                primerItem = {
                    id: item.id,
                    articulo: item.articulo,
                    cantidad: cant,
                    precio: item.precio * cant,
                    foto: item.foto
                }
            } else {
                primerItem = {
                    id: item.id,
                    articulo: item.articulo,
                    cantidad: cant,
                    precio: item.precio,
                    foto: item.foto
                }
            }
            setCart([...cart, primerItem])
            return console.log("Primer item agregado: "+primerItem.articulo)
        } else {
            let esta = false;
            let indexRep;
            let itemIdModificado;
            cart.forEach((i, index)=>{
                if(i.id === item.id){
                    esta=true;
                    indexRep= index;
                    if (cant > 1){
                        itemIdModificado = {
                            id: item.id,
                            articulo: item.articulo,
                            cantidad: i.cantidad + cant,
                            precio: (i.precio + item.precio) * cant,
                            foto: item.foto
                        }
                    } else {
                        itemIdModificado = {
                            id: item.id,
                            articulo: item.articulo,
                            cantidad: i.cantidad + cant,
                            precio: i.precio + item.precio,
                            foto: item.foto
                        }
                    }
                }
            })
            if(esta){
                let cartAct = cart;
                cartAct[indexRep] = itemIdModificado
                setCart(cartAct)
                return console.log("Se sumo cantidad a "+itemIdModificado.articulo)
            } else {
                let nuevoItem;
                if (cant > 1){
                    nuevoItem = {
                        id: item.id,
                        articulo: item.articulo,
                        cantidad: cant,
                        precio: item.precio * cant,
                        foto: item.foto
                    }
                } else {
                    nuevoItem = {
                        id: item.id,
                        articulo: item.articulo,
                        cantidad: cant,
                        precio: item.precio,
                        foto: item.foto
                    }
                }
                setCart([...cart, nuevoItem])
                return console.log("Se agrego item a la lista: "+nuevoItem.articulo)
            }
        }
    }
         
 
    function remove(item){
        
    }
    return <CartContext.Provider value={{cart , add , remove}}>
        {children}
    </CartContext.Provider>
}