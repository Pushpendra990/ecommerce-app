import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const isAuthenticated = !!localStorage.getItem('token');
      setStatus(isAuthenticated);
    }, 500);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-content">
        <h3 className="product-name">{product.name}</h3>
         <p className="description">${product.description}</p>
        <div className="product-details">
          <p className="price">${product.price}</p>
          <button 
            className="add-button" 
            disabled={!status} 
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
