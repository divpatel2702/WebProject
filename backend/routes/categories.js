const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Create Category
router.post('/add', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Category
router.delete('/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
