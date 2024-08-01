import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const cartProductDetails = cartItems.map(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (product) {
      return { ...cartItem, ...product };
    } else {
      console.warn(`Product with id ${cartItem.id} not found.`);
      return cartItem;
    }
  });

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartProductDetails.reduce((total, item) => {
      if (item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartProductDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartProductDetails.map(item => (
            <li key={item.id}>
              <div>
                <h2>{item.name}</h2>
                <p>Price: ${item.price ? item.price.toFixed(2) : 'N/A'}</p>
                <p>Quantity: 
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    min="1"
                  />
                </p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${calculateTotal()}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
