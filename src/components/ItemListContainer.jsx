import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import ItemList from './ItemList';

export default function ItemListContainer(){
    return(
        <div className="container">
            <h2>Ecommerce de Accesorios</h2>
            <ItemList/>
        </div>
    )
}