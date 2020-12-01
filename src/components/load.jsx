import React from 'react'
import {getFirestore} from '../firebase'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

function Load({nuevoProducto}){
    function cargarProducto(e){
        e.preventDefault()
        const db = getFirestore()
        // const product= db.collection('items')
        db.collection('items').add(nuevoProducto)
        .then(r => console.log(r))
        .catch(err => console.log(err))
    }
    return(
        <>
            <button style={{margin:"20px 10px"}} onClick={(e)=>cargarProducto(e)} type="button" className="waves-effect waves-light btn">Cargar</button>
        </>
    )
}
export default Load;