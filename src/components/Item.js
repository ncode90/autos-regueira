import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Item(props) {
    return(
      <Link to={`/item/${props.id}`}>
        <Card bg='light' text= 'dark' className="mb-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.pictureUrl} style={{width: '100%', height: '300px', alignSelf: 'center'}}/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{props.price}</small>
            </Card.Footer>
          </Card>  
      </Link>
    )
}

export default Item