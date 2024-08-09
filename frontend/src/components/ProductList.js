// components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/products');
      setProducts(response.data);
    };
    fetchData();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
  };

  const handleSave = async () => {
    const response = await axios.get('/products');
    setProducts(response.data);
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <ProductForm editingProduct={editingProduct} onSave={handleSave} />
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price} - {product.category.name}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
