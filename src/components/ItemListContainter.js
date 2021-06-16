import React from 'react'
import '../styles/ItemListContainer.css'

function ItemListContainter(props){
    return(
    <div className="greeting">
        {props.greeting}
    </div>
    )
}

export default ItemListContainter;