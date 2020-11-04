import React from 'react';
import ItemList from './ItemList';

export default function ItemListContainer(){
    return(
        <div className="container">
            <h2>Ecommerce de Accesorios</h2>
            <ItemList/>
        </div>
    )
}