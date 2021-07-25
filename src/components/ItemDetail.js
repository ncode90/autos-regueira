import React, {useContext, useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'

function ItemDetail(props){
    const [counter, setCounter] = useState(0)
    const {addItem} = useContext(CartContext)

    return(
        <div>
            <Card bg='info' text= 'white' className="mb-2" style={{ width: '800px' , margin: '0 auto'}}>
                <Card.Header><h1>{props.item.title}</h1></Card.Header>
                <Card.Img variant="top" src={props.item.pictureUrl} style={{width: '100%'}}/>
                <Card.Body>
                    <Card.Title><h3>{props.item.description}</h3></Card.Title>
                    <Card.Text>${parseFloat(props.item.price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Card.Text>
            </Card.Body>
            </Card>
            {counter > 0 ? (<Link to='/cart'><button onClick={() => addItem(props.item, counter)} type="button" class="btn btn-outline-info" style={{ marginBottom: '10px'}}>Termina tu compra</button></Link>) 
            : (<ItemCount stock={5} initial={1} onAdd={setCounter}/>)}
        </div>
    )
}

export default ItemDetail