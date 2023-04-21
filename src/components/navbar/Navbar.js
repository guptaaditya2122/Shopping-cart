import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectCart } from '../../features/cartSlice'
import './Navbar.css'

function Navbar() {
    const cart = useSelector(selectCart);

  return (
    <div className="navbar">
      <Link to="/">
        <h2>SHOPIFY</h2>
      </Link>
      <ul className="navbar-ul">
        <li>Womens</li>
        <li>Mens</li>
        <li>Clothing</li>
        <li>Brands</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, Aditya</button>
      </ul>
    </div>
  )
}

export default Navbar