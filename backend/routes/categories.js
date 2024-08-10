const express = require('express');
const router = express.Router();
const Category = require('../models/Category.js');

// GET /categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find(); 
    res.json(categories); 
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /categories/add
router.post('/add', async (req, res) => {
  try {
    const newCategory = new Category(req.body); 
    await newCategory.save(); 
    res.status(201).json(newCategory);
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT /categories/:id
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Category.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' }); 
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
