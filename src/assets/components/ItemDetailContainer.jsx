import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../json/data';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id.toString() === id);
    setProduct(selectedProduct);
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
