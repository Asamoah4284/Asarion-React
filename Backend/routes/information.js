// my-react-app/Backend/routes/information.js

const express = require('express');
const router = express.Router();

const User = require('../models/user')

// ... existing code ...

// GET all information
router.get('/', (req, res) => {
    // Logic to retrieve all information
    res.json({message: 'Get all information'});
});

// POST all information
router.post('/', async (req, res) => {
    const {fullname, email, phoneNumber, business, product } = req.body
    try{
        const user = await User.create({fullname, email, phoneNumber, business, product})
        res.status(200).json(user)
    }catch (error){
        res.status(400).json({error: error.message})
    }
    // Logic to add new information
});

// ... existing code ...

module.exports = router;