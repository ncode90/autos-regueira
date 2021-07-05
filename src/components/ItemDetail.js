import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const productDetail = {
    title: "Item Detail Component",
    description: "Fiat 500X Yatching", 
    picture: "https://noticias.coches.com/wp-content/uploads/2021/07/Fiat-500X-Yatching-9.jpeg",
    price: "13.385 €"
}

function ItemDetail(){
    
    const [detail, setDetail] = useState([])


    useEffect(() => {
        new Promise ((resolve, reject) => {
        setTimeout(() => resolve(productDetail), 2000)
        }).then((res) => setDetail(res))
    }, [])

    return(
        <Card bg='info' text= 'white' className="mb-2" style={{ width: '800px' , margin: '0 auto'}}>
            <Card.Header><h1>{detail.title}</h1></Card.Header>
            <Card.Img variant="top" src={detail.picture} style={{width: '800px'}}/>
            <Card.Body>
                <Card.Title><h3>{detail.description}</h3></Card.Title>
                <Card.Text>{detail.price}</Card.Text>
          </Card.Body>
        </Card>  
    )
}

export default ItemDetail