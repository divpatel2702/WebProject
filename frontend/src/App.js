import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdminCRUD from './components/AdminCRUD';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext'; 
//import AdminCRUDCategories from './components/AdminCRUDCategories';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/manage" element={<AdminCRUD />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
