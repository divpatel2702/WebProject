const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create Item
router.post('/add', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().populate('category');
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read Single Item
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('category');
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Item
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Item
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
