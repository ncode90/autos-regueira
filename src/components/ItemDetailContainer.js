import React, { useState, useEffect } from 'react'
import {getFirestore} from '../firebase'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner'

function ItemDetailContainter(){

    const [items, setItems] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const itemQry = itemCollection.where('itemId', '==', itemId)
        itemQry.get().then((querySnapshot) => {
            if(querySnapshot.size !== 0)
                setItems(querySnapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return(
        <div>
        {items.length === 0 ? (<Spinner animation="border" variant="info" />) : (<ItemDetail item={items[0]}/>)}
        </div>
    )
}

export default ItemDetailContainter