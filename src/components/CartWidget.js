import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    return(
        <div style={{color: "white"}} >
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>       
        </div> 
    )
}

export default CartWidget