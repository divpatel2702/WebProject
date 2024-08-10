const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const itemRoutes = require('./routes/items');
const categoryRoutes = require('./routes/categories'); 

// Initialize Express
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://divpatel27:qwiH1GUolu6lUQMk@cluster0.01pkvgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes); 
app.use('/items', itemRoutes);

// Checkout route
app.post('/checkout', (req, res) => {
  const { cartItems, userInfo } = req.body;

  if (!cartItems || !userInfo) {
    return res.status(400).json({ message: 'Invalid request data' });
  }

  console.log('Processing payment for:', cartItems);
  console.log('User Info:', userInfo);

  const success = true; 

  if (success) {
    res.status(200).json({ message: 'Payment successful!' });
  } else {
    res.status(500).json({ message: 'Payment failed!' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
