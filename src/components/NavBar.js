import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <span><Link to="/" class="navbar-brand">Autos Regueira</Link></span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-brand"><Link to={`/category/audi`} class="nav-link">Audi</Link></li>
                    <li class="nav-item"><Link to={`/category/bmw`} class="nav-link">BMW</Link></li>
                    <li class="nav-item"><Link to={`/category/ferrari`} class="nav-link">Ferrari</Link></li>
                    <li class="nav-item"><Link to={`/category/jeep`} class="nav-link">Jeep</Link></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar