const express = require('express');
const router = express.Router();
const Category = require('./models/Category'); // Adjust the path as needed

// GET /categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories from the database
    res.json(categories); // Send categories as JSON response
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /categories/add
router.post('/add', async (req, res) => {
  try {
    const newCategory = new Category(req.body); // Create a new Category instance with request data
    await newCategory.save(); // Save the new category to the database
    res.status(201).json(newCategory); // Respond with the newly created category
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT /categories/:id
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find and update the category
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category); // Respond with the updated category
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Category.findByIdAndDelete(req.params.id); // Find and delete the category
    if (!result) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' }); // Respond with success message
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
