const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Contact Schema and Model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

// API Routes
// Contact form submission endpoint
app.post(
  '/api/contact',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').notEmpty(),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;

      // Create new contact
      const contact = new Contact({
        name,
        email,
        message,
      });

      // Save to database
      await contact.save();

      // Return success
      return res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }
);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
