import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './stylesComponents.css'



export default function ItemCount({stock}){
    return(
        <div>
            <button>-</button>
            <span>{stock}</span>
            <button>+</button>
        </div>
    )
}