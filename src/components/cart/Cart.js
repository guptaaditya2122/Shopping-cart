import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectCart } from '../../features/cartSlice';
import './Cart.css'

function Cart() {
const cart = useSelector(selectCart);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
        <p>No Item Added! Please add something to your cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-price">{item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Expected Delivery 3 - 6 days)
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Next</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Cart