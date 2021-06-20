import React, { useState } from "react"
import '../styles/ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(initial)

  const increaseCount = () => {
    if(stock>count)
        setCount(localCount => localCount + 1)
  }

  const decreaseCount = () => {
    if(count>1)
        setCount(localCount => localCount - 1)
  }

  return (
    <div>
        <div>
            <button onClick={decreaseCount} className="count-minus">-</button>
            <span className="count">{count}</span>
            <button onClick={increaseCount} className="count-plus">+</button>
        </div>
        <button onClick={onAdd} className="onAdd">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;