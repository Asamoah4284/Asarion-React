require('dotenv').config();
const express = require('express');
const path = require('path');  // Make sure to require the 'path' module
const mongoose = require('mongoose');
const cors = require("cors");
const multer = require("multer");
const { signup, login } = require('./controller/authController');
const informationRoutes = require('./routes/information');
const dataRoutes = require('./routes/data');
const BlogRoutes = require('./routes/Blog');

const app = express();

const allowedOrigins = [
  'http://localhost:4173',
  'https://asarion-frontend.vercel.app', // Corrected the URL
  'https://www.asarion.org'  // ✅ Add this
];

// Set up CORS middleware
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));


// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Other routes...

// Make sure you have this to catch the route for sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Define routes
app.use('/api/clients', informationRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/blog', BlogRoutes);

// Preflight request handler (added just in case)
app.options('*', cors());

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in .env file');
  process.exit(1);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
