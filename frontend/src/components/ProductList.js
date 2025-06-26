import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="grid">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductList;