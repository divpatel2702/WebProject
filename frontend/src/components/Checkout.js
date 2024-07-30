import React from 'react';

function Checkout({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Order Summary</h1>
      <ul>
        {cart.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>

      <form>
        <h3>Payment Information</h3>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiry Date" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
