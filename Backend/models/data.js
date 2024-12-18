const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

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
  
   
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
