import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const token = JSON.parse(localStorage.getItem('token'));

  const checkout = async () => {
    if (!token) {
      alert("Please log in to proceed with checkout.");
      return;
    }
    const res = await axios.post(
      'http://localhost:5000/api/orders',
      {
        userId: token.id,
        totalAmount: total.toFixed(2),
        items: cart,
      },
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      window.location = res.data.url;
      dispatch(clearCart());
    } else {
      alert("Checkout failed. Please try again.");
    }
    
  };

  if (!cart.length) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
        <Link to="/">← Go Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="btn checkout-btn" onClick={checkout}>Proceed to Checkout</button>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
