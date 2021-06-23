import React from 'react'
import Card from 'react-bootstrap/Card'

function Item(props) {
    return(
        <Card>
          <Card.Img variant="top" src={props.pictureUrl} style={{width: '160px'}}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.price}</small>
          </Card.Footer>
        </Card>  
    )
}

export default Item