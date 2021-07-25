import React, { useState, useEffect } from 'react'
import {getFirestore} from '../firebase'
import {useParams} from 'react-router-dom'
import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import CardGroup from 'react-bootstrap/CardGroup'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainter({greeting}){
    
    const {categoryId} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        var itemQry = itemCollection
        if(categoryId != null)
            itemQry = itemCollection.where('category', '==', categoryId)
        itemQry.get().then((querySnapshot) => {
            if(querySnapshot.size !== 0)
                setItems(querySnapshot.docs.map(doc => doc.data()))
            })   
    }, [categoryId])

    return(
        <div>
            {categoryId == null ? <p className="greeting">{greeting}</p> 
                : <p className="greeting">{categoryId.toUpperCase()}</p>}
            {items.length === 0 ? (<Spinner animation="border" variant="info" />) 
                : [categoryId == null ? ( <CardGroup><ItemList items={items} /></CardGroup>) 
                    : ( <CardGroup><ItemList items={items} /></CardGroup>)]
            }
        </div>
    )
}

export default ItemListContainter