// my-react-app/Backend/routes/information.js

const express = require('express');
const router = express.Router();

const User = require('../models/user')

// ... existing code ...

// GET all information
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Return the users as a JSON response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle any errors
    }
});

// POST all information
router.post('/', async (req, res) => {
    const { fullname, email, phoneNumber, business, product, birth } = req.body; // Destructure request body
    try {
        const user = await User.create({ fullname, email, phoneNumber, business, product, birth }); // Create new user
        res.status(200).json(user); // Return created user
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle validation errors
    }
    // Logic to add new information
});

// ... existing code ...

module.exports = router;