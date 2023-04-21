import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addItemToCart, selectCart } from '../../features/cartSlice';
import './ItemDetail.css'


function ItemDetail() {
const [items,setItem] = useState([]); 

 useEffect(()=>{
    fetch('/data.json')
    .then(res=> res.json())
    .then(data=>setItem([...data]))
    .catch(er=>console.log(er));
  },[])
  
const dispatch =useDispatch()
const params = useParams();
const itemId = parseInt(params?.id);

const cart = useSelector(selectCart)
const item = getItemDetail(itemId)
const [isAdded, setIsAdded] = useState(
    cart.findIndex((c) => c.id === itemId) > -1
  );


function getItemDetail(id){
    return items.filter((item)=>item.id === id)[0]
}

  return (
    <div className="item-detail-container">
        <Link to='/'>&#8592; Back</Link>
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={item?.image} alt='' />
            </div>
            <div className="item-detail-info">
                <div className="item-brand" style={{ margin: "0px 10px" }}>
                    {item?.brand}
                </div>
                <div className="item-name">{item?.name}</div>
                <div className="item-price">${item?.price}</div>

                <select className="item-size">
                    <option value={"S"}> Select size (S)</option>
                    <option value={"M"}> Select size (M)</option>
                    <option value={"L"}> Select size (L)</option>
                    <option value={"XL"}> Select size (XL)</option>
                </select>

                <button
                className="item-btn"
                disabled={isAdded}
                onClick={()=>{
                    dispatch(addItemToCart(item));
                    setIsAdded(true);
                }}>
                {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To bag"}
                
          </button>
          <p className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
            </div>
        </div>


    </div>
  )
}

export default ItemDetail