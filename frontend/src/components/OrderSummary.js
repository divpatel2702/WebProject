import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const { state } = useLocation();
  const { userDetails, cartItems } = state;

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Name: {userDetails.name}</p>
      <p>Address: {userDetails.address}</p>
      <p>Email: {userDetails.email}</p>

      <h3>Products:</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;
