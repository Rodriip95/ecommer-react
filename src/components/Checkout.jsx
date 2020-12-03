import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import {estilosBtn} from './images/images'

export default function Checkout({cart}){
  const {total} = useContext(CartContext)
  const locally = useHistory()

    return(
      <div style={{float: "right", marginRight:"50px"}}>
        <button onClick={()=>locally.push('/checkout')} style={estilosBtn} className="waves-effect waves-light btn">
          <i className="Large material-icons right">check</i>Comprar $<span>{total}</span></button>  
      </div>        
    )
}