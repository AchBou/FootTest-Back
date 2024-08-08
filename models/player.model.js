const mongoose = require('../db/client'); // Import the Mongoose client from db.js

// Define the schema for the 'players' collection
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    signin: {
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
    },
    born: {
        type: Date,
        required: true,
    },
});

// Create the model from the schema
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;