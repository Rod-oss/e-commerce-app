import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
