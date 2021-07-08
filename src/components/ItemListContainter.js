import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import CardGroup from 'react-bootstrap/CardGroup'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainter({greeting}){
    
    const {categoryId} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        new Promise ((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {id: "101", title: "Jeep Cherokee", description: "2014", price: "15.500 €", pictureUrl: "https://noticias.coches.com/wp-content/uploads/2013/04/Jeep-Cherokee-2014-14.jpg", category: "jeep" },
                {id: "201", title: "Audi A1", description: "2015", price: "10.000 €", pictureUrl: "https://noticias.coches.com/wp-content/uploads/2014/11/Audi-A1-2015-06.jpg", category: "audi" },
                {id: "301", title: "BMW i8", description: "2014", price: "42.990 €", pictureUrl: "https://noticias.coches.com/wp-content/uploads/2013/09/BMW-i8-2014-10.jpg", category: "bmw" },
                {id: "401", title: "Ferrari 458 Spider", description: "2012", price: "175.000 €", pictureUrl: "https://noticias.coches.com/wp-content/uploads/2011/08/ferrari-458-spider-01.jpg", category: "ferrari" }
            ]
        ), 2000)})
            .then((dataRes) => {
                setItems(dataRes)
            })
    }, [])

    return(
        <div>
            {categoryId == null ? <p className="greeting">{greeting}</p> 
                : <p className="greeting">{categoryId.toUpperCase()}</p>}
            {items.length === 0 ? (<Spinner animation="border" variant="info" />) 
                : [categoryId == null ? ( <CardGroup><ItemList items={items} /></CardGroup>) 
                    : ( <CardGroup><ItemList items={items.filter(e => e.category === categoryId)} /></CardGroup>)]
            }
        </div>
    )
}

export default ItemListContainter