import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Images from './images/images'
import Checkout from './Checkout'


function Cart(){
    const {cart, removeCart} = useContext(CartContext)

    const detalles={
        display:"flex",
        justifyContent: "space-around"
    }

    const text= { 
        zIndex: "100",
        position: "relative",
        color: "white", 
        fontSize: "24px",
        fontWeight: "bold"
    } 

    const centrar ={
        textAlign:"center"
    }

    const dato={
        fontSize:"36px",
        fontWeight: "bold"
    }

    return(
        <div className="container">
            <h3>Detalles del pedido!</h3>
            <hr/>
            <div style={detalles}>
                <span>Producto</span>
                <span>Cantidad</span>
                <span>SubTotal</span>
            </div>
            <hr/>
            {cart.map((pro)=>(
                <div className="row" style={{height:"150px"}}>
                    <div className="col s4" style={{padding:"0 50px"}}>
                        <Link to={`/item/${pro.id}`}>
                            <img style={{maxWidth:"150px", position:"absolute"}} src={Images[pro.imagen]}/>
                            <span style={text}>{pro.nombre}</span>
                        </Link>
                    </div>
                    <div className="col s4" style={centrar}>
                        <span style={dato}>{pro.cantidad}</span>
                    </div>
                    <div className="col s4" style={centrar}>
                        <span style={dato}>$ {pro.precio * pro.cantidad}</span>
                        <button onClick={()=>removeCart(pro)} style={{marginLeft:"10px"}} class="waves-effect waves-teal btn-flat">
                            <i style={{fontSize:"26px"}} class="material-icons">not_interested</i>
                        </button>
                    </div>
                </div>
            ))}
            <Checkout cart={cart}/>
        </div>
    )
}

export default Cart;