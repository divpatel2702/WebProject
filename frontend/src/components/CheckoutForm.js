import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [userDetails, setUserDetails] = useState({ name: '', address: '', email: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Typically, you would send this data to a backend for processing.
    // Simulate processing with a confirmation message.
    setConfirmationMessage('Purchase confirmed! Redirecting to order summary...');
    setTimeout(() => {
      // Redirect to the order summary page
      navigate('/order-summary', { state: { userDetails, cartItems } });
    }, 2000); // Wait 2 seconds before redirecting
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={userDetails.name} onChange={handleChange} required />
        <label>Address:</label>
        <input type="text" name="address" value={userDetails.address} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={userDetails.email} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default CheckoutForm;
