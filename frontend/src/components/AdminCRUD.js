import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm.js'; // Assuming you have a ProductForm component

const AdminCRUD = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <ProductForm 
        selectedProduct={selectedProduct} 
        onProductUpdated={fetchProducts} 
        categories={categories} // Pass categories to the form
      />
      <h3>Products List</h3>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleSelectProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCRUD;
