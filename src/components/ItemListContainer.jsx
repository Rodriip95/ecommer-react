import React from 'react';


import ItemList from './ItemList';

export default function ItemListContainer(){
    return(
        <div className="container">
            <h2 style={{textAlign:"center", margin:"20px"}} className="card-title">Realiza tu pedido!</h2>
            <ItemList/>
        </div>
    )
}