import React, {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/cartContext'

function CartWidget(){
    const context = useContext(CartContext)
    var totalQuantity = 0
    context.products.map((product) => (
        totalQuantity += product.quantity
    ))
    return(
        <div style={{color: "white"}} >
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                {totalQuantity}
            </span>       
        </div> 
    )
}

export default CartWidget