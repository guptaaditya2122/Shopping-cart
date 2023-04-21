import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/home';
import ItemDetail from './components/itemDetail/ItemDetail';
import Navbar from './components/navbar/Navbar';
import Orders from './components/orders/Orders';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          <Route  path="/orders" element={<Orders/>}/>
          <Route  path="/checkout" element={<Checkout/>}/>
          <Route  path="/item/:id" element={<ItemDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
