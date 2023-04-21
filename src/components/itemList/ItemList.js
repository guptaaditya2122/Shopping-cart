import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../item/Item'
import './ItemList.css'

function ItemList({items}) {
  return (
    <div className="item-list">
        
        {items.map((item)=>(
        <Link to= {`/item/${item.id}`} key={item.id*Math.random(0,1)}>
            <Item
            name={item.name}
            rating={item.rating}
            price={item.price}
            saleDiscount={item.saleDiscount}
            image={item.image}
            brand={item.brand}
            />
        </Link>
        ))}
    </div>
  )
}

export default ItemList