require('dotenv').config()
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const informationRoutes = require('./routes/information')
const dataRoutes = require('./routes/data')
const BlogRoutes = require('./routes/Blog')
const cors = require("cors");
const multer = require("multer");
const { signup, login } = require('./controller/authController');


const app = express(); // Create an Express application
app.use(cors({
    origin: 'http://localhost:4173',
    credentials: true
}));
app.use(express.json()); // Middleware to parse JSON requests
app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5000; // Set the port


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { // Add your MongoDB URI in .env
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully'); // Log successful connection
}).catch(err => {
    console.error('MongoDB connection error:', err); // Log connection error
});

// Define a basic route
app.use('/api/clients', informationRoutes)
app.use('/api/data', dataRoutes)
app.use('/api/signup', signup)
app.use('/api/login', login)
app.use('/api/blog', BlogRoutes)


// Check if required environment variables are set
if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1); // Exit the process if the variable is not set
}

// Start the server with error handling
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server status
}).on('error', (err) => {
    console.error('Error starting server:', err); // Log server start error
});

