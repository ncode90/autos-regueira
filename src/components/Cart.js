import React, {useContext} from 'react'
import { CartContext } from '../context/cartContext'

function Cart(){
    const context = useContext(CartContext)
    return(
        <div>
            <h1>Tu Carrito</h1>
            <ol class="list-group list-group-numbered">
                {context.products.map((product) => (
                <li class="list-group-item d-flex justify-content-between align-items-start" style={{width: "25%", alignSelf: "center"}}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">{product.title}</div>
                        {product.description}
                    </div>
                    <span class="badge bg-primary rounded-pill">{product.quantity}</span>
                </li>
                ))}
            </ol>
        </div> 
   )
}

export default Cart