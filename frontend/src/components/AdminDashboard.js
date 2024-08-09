import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/admin-dashboard/manage">Manage Items</Link></li>
          <li><Link to="/admin-dashboard/manage-categories">Manage Categories</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
