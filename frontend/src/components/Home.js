import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product">
            <Link to={`/product/${product._id}`}>
              <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
