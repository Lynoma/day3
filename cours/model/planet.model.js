const mongoose = require('mongoose');

const planetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'Dark'
    },
    size: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const Planet = mongoose.model('Planets', planetSchema);
module.exports = Planet;