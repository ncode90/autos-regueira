import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { getFirestore } from '../firebase'

function Order() {
    const context = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [buyer, setBuyer] = useState({name: '', phone: '', email: ''})
    
    useEffect(() => {
        const db = getFirestore()
        const orders = db.collection("orders")
        const newOrder = {
            buyer: buyer,
            items: context.products,
            date: new Date(),
            total: context.products.reduce((acum, item) => acum + item.price, 0)
        }
        if(newOrder.buyer.name.length > 1){
            orders.add(newOrder)
            alert("Orden generada correctamente")
        }
    }, [buyer])

    function handleSubmit(event) {
        const newBuyer = {name: name, phone: phone, email: email}
        setBuyer(newBuyer)
    }

    return(
        <div className="row g-3 align-items-center">
            <h1>Tu Orden</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} style={{width: "25%", display: "initial", marginLeft: "10px"}} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" onChange={(e)=>{setPhone(e.target.value)}} style={{width: "25%", display: "initial", marginLeft: "10px"}} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp" style={{width: "25%", display: "initial", marginLeft: "25px"}} required/>
                    <div id="emailHelp" className="form-text">Nunca compartiremos tus datos con nadie</div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Order