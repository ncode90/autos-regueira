import React from 'react'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'

function NavBar(){
    return(
        <nav className="logo">
            <h3>Autos Regueira</h3>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;