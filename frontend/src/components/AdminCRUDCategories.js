import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCRUDCategories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '' });
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    if (editingCategory) {
      await axios.put(`/categories/${editingCategory._id}`, form);
      setEditingCategory(null);
    } else {
      await axios.post('/categories/add', form);
    }
    setForm({ name: '' });
    const categoriesResponse = await axios.get('/categories');
    setCategories(categoriesResponse.data);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setForm({ ...category });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/categories/${id}`);
    const categoriesResponse = await axios.get('/categories');
    setCategories(categoriesResponse.data);
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
