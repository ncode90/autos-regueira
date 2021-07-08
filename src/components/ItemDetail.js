import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function ItemDetail(props){

    return(
        <div>
            <Card bg='info' text= 'white' className="mb-2" style={{ width: '800px' , margin: '0 auto'}}>
                <Card.Header><h1>{props.item.title}</h1></Card.Header>
                <Card.Img variant="top" src={props.item.pictureUrl} style={{width: '100%'}}/>
                <Card.Body>
                    <Card.Title><h3>{props.item.description}</h3></Card.Title>
                    <Card.Text>{props.item.price}</Card.Text>
            </Card.Body>
            </Card>
            <ItemCount stock={5} initial={1} onAdd={(count) => alert(count + " items agregados al carrito")}/>  
        </div>
    )
}

export default ItemDetail