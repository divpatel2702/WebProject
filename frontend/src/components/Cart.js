import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <Link to="/checkout" className="checkout-link">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
