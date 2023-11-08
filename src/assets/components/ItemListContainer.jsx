import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../json/data';
import ProductList from './ProductList';

function ItemListContainer() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <div>
      <h2>Categoría: {category || 'Todos los productos'}</h2>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;

