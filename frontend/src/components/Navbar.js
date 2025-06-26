import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.length;
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyStore</h2>
      </div>
      <div className="navbar-links">
        <Link to="/">Shop</Link>
        {isAuthenticated ? (
          <>
           <Link to="/cart" className="nav-cart">
            Cart (<span className="cart-badge">{cartCount}</span>)
          </Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
