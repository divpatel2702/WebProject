import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/admin-login">Admin</Link></li> {/* Admin link added */}
      </ul>
    </nav>
  );
};

export default Navbar;
