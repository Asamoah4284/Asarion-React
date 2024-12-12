const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    business: {
        type: String,
        required: true,
        
    },
    birth: {
        type: Date,
        required: true,
    },
    product: {
        type: String,
        required: true,
        enum: ['Dropshipping', 'Website Development', 'Professional Voiceover', 'Netflix Account', 'Branding', 'Graphic Design'],
       
    },
    // ... other fields can be added here
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
