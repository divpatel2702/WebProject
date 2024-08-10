import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ selectedProduct, onProductUpdated, categories }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '', 
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct({
        name: '',
        price: '',
        description: '',
        category: '',
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProduct) {
        // Update existing product
        await axios.put(`/products/${selectedProduct._id}`, product);
      } else {
        // Add new product
        await axios.post('/products', product);
      }
      setProduct({
        name: '',
        price: '',
        description: '',
        category: '',
      });
      onProductUpdated();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div className="product-form">
      <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <label>Category:</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">{selectedProduct ? 'Update' : 'Add'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
