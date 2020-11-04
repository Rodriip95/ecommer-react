import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


export default function CartWidget(){
    return(
        <button className="btn btn-primary">
            <ion-icon name="cart-outline"></ion-icon>
        </button>
    )
}