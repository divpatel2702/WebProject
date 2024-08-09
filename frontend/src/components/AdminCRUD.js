import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AdminCRUD.css"

const AdminCRUD = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: '', description: '', imageUrl: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const itemsResponse = await axios.get('/items');
      setItems(itemsResponse.data);

      const categoriesResponse = await axios.get('/categories');
      setCategories(categoriesResponse.data);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await axios.put(`/items/${editingItem._id}`, form);
      setEditingItem(null);
    } else {
      await axios.post('/items/add', form);
    }
    setForm({ name: '', price: '', category: '', description: '', imageUrl: '' });
    const itemsResponse = await axios.get('/items');
    setItems(itemsResponse.data);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setForm({ ...item });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/items/${id}`);
    const itemsResponse = await axios.get('/items');
    setItems(itemsResponse.data);
  };

  return (
    <div>
      <h2>Manage Items</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
        <label>Price:</label>
        <input type="number" name="price" value={form.price} onChange={handleInputChange} required />
        <label>Category:</label>
        <select name="category" value={form.category} onChange={handleInputChange} required>
          {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
        </select>
        <label>Description:</label>
        <textarea name="description" value={form.description} onChange={handleInputChange}></textarea>
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleInputChange} />
        <button type="submit">{editingItem ? 'Update Item' : 'Add Item'}</button>
      </form>
      <h3>Items List</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCRUD;
