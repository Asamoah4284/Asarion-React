// my-react-app/Backend/routes/information.js

const express = require('express');
const router = express.Router();

const Data = require('../models/data')

// ... existing code ...

// GET all information
router.get('/', async (req, res) => {
    try {
        const data = await Data.find(); // Fetch all users from the database
        res.status(200).json(data); // Return the users as a JSON response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle any errors
    }
});

// POST all information
router.post('/', async (req, res) => {
    const { email, phoneNumber } = req.body; // Destructure request body
    try {
        const data = await Data.create({ email, phoneNumber }); // Create new user
        res.status(200).json(data); // Return created user
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle validation errors
    }
    // Logic to add new information
});

// ... existing code ...

module.exports = router;