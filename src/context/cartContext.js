import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        const element = {
            id: item.id,
            title: item.title,
            description: item.description,
            quantity: quantity
        }

        let a = products.find((i) => i.id === element.id)
        if(a===undefined)
            setProducts([element, ...products])
        else
            alert("El producto ya se encuentra en el carrito")
    }
 
    return(
        <CartContext.Provider value={{addItem, products}}>
            {children}
        </CartContext.Provider>
    )
}