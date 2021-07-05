import React from 'react'
import Card from 'react-bootstrap/Card'

function Item(props) {
    return(
      <Card bg='light' text= 'dark' className="mb-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.pictureUrl} style={{width: '400px', height: '300px', alignSelf: 'center'}}/>
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