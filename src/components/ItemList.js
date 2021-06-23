import React from 'react'
import Item from './Item'

function ItemList(props) {
    const items = props.items;
    return(
        items.map((item) => (
            <Item key={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
        ))
    )
}

export default ItemList