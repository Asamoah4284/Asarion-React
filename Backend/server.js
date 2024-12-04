require('dotenv').config()
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const app = express(); // Create an Express application
const informationRoutes = require('./routes/information')

app.use(express.json()); // Middleware to parse JSON requests

const PORT = process.env.PORT || 3000; // Set the port


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
app.use('/api/interested', informationRoutes)



// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server status
});

