import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faChevronLeft, faChevronRight, faTrash} from '@fortawesome/free-solid-svg-icons'

function Cart(){
    const context = useContext(CartContext)
    var totalAmount = 0
    return(
        context.products.length ?
        <div>
            <h1>Tu Carrito</h1>
            <ol class="list-group list-group-numbered">
                {context.products.map((product) => (
                    totalAmount = (parseFloat(totalAmount) + parseFloat(product.price, 1000)*parseInt(product.quantity)).toFixed(3),
                <li class="list-group-item d-flex justify-content-between align-items-start" style={{width: "25%", alignSelf: "center"}}>
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">{product.title}</div>
                    <div style={{textAlign: "left"}}>${(parseFloat(product.price, 1000)*parseInt(product.quantity)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
                    </div>
                    <span class="badge bg-secondary rounded-pill">{product.quantity}</span>
                    <button type="button" class="btn badge bg-danger rounded-pill" onClick={() => context.removeItem(product.id)} style={{ marginLeft: '5px'}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </li>
                ))}
            </ol>
            <div class="d-grid gap-2 d-md-block">
                <Link to='/'><button type="button" class="btn btn-secondary"><FontAwesomeIcon icon={faChevronLeft}/> Volver</button></Link>
                <button type="button" class="btn btn-danger" onClick={context.clear} style={{ margin: '10px'}}><FontAwesomeIcon icon={faTrash}/> Vaciar Carrito</button>
                <Link to='/order'><button type="button" class="btn btn-success">Continuar <FontAwesomeIcon icon={faChevronRight}/></button></Link>
            </div>
            <div class="alert alert-info" role="alert">Total: ${parseFloat(totalAmount).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
        </div> 
        :
        <div>
            <div><span>El carrito est?? vac??o</span></div>
            <div><Link to='/'><button type="button" class="btn btn-secondary" style={{ margin: '10px'}}><FontAwesomeIcon icon={faChevronLeft}/> Volver</button></Link></div>
        </div>
   )
}

export default Cart