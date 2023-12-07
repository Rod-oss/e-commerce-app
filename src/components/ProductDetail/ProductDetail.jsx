import React, { useState } from 'react';
import ItemCounter from './ItemCounter';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCounter quantity={quantity} setQuantity={setQuantity} />
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ProductDetail;
