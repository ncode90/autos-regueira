import React from 'react'
import '../styles/ItemListContainer.css'
import ItemCount from './ItemCount'

function ItemListContainter({greeting}){
    return(
    <div>
        <p className="greeting">{greeting}</p>
        <ItemCount stock={5} initial={1} onAdd={() => alert("¡Items agregados correctamente!")}/>
    </div>
    )
}

export default ItemListContainter;