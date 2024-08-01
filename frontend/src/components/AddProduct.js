import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products/add', {
        name,
        price,
        category,
        description,
        imageUrl,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Product added successfully');
      // Reset form
      setName('');
      setPrice('');
      setCategory('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="form-label">Name:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <span className="form-label">Price:</span>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          <span className="form-label">Category:</span>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        <label>
          <span className="form-label">Description:</span>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          <span className="form-label">Image URL:</span>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
