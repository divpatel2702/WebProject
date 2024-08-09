import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCRUDCategories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '' });
  const [editingCategory, setEditingCategory] = useState(null);

  // Fetch categories from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await axios.put(`http://localhost:5000/categories/${editingCategory._id}`, form);
        setEditingCategory(null);
      } else {
        await axios.post('http://localhost:5000/categories/add', form);
      }
      setForm({ name: '' });
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setForm({ ...category });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/categories/${id}`);
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
        <button type="submit">{editingCategory ? 'Update Category' : 'Add Category'}</button>
      </form>
      <h3>Categories List</h3>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            {category.name}
            <button onClick={() => handleEdit(category)}>Edit</button>
            <button onClick={() => handleDelete(category._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCRUDCategories;
