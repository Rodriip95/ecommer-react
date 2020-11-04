import React from 'react';
import CartWidget from './CartWidget';
import Menu from './Menu';

function Navbar(){
    return(
        <nav className="container navbar">
            <Menu/>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;