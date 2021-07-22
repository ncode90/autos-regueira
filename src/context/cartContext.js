import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        const element = {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: quantity
        }

        let a = products.find((i) => i.id === element.id)
        if(a===undefined)
            setProducts([element, ...products])
        else
            alert("El producto ya se encuentra en el carrito")
    }

    const clear = () => {
        setProducts([])
    }

    const removeItem = (id) => {
        const newProducts = products.filter((element) => element.id !== id)
        setProducts(newProducts)
    }
 
    return(
        <CartContext.Provider value={{addItem, clear, removeItem, products}}>
            {children}
        </CartContext.Provider>
    )
}