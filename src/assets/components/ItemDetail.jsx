import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ products, addItem }) => {
  const { categoria, id } = useParams();
  const [product, setProduct] = useState(null);
  const [contador, setContador] = useState(0);

  const fetchProductById = (id) => {
    return new Promise((resolve, reject) => {
      // Simulación de búsqueda de un producto por ID
      const productFound = products.find((product) => product.id === id);
      if (productFound) {
        setTimeout(() => resolve(productFound), 1000);
      } else {
        reject(new Error(`Producto con ID ${id} no encontrado`));
      }
    });
  };

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .catch((error) => console.error(error.message));
  }, [id]);

  const onAdd = () => {
    addItem(product, contador);
  };

  return product ? (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Nombre: {product.name}</p>
      <p>Categoría: {categoria}</p>
      <p>ID del Producto: {id}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  ) : (
    <div>Cargando...</div>
  );
};

export default ItemDetail;

