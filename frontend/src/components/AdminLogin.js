import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css"

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials for demonstration
    if (username === 'admin' && password === 'password') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
