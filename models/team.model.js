const mongoose = require('../db/client'); // Import the Mongoose client from db.js

// Define the schema for the 'teams' collection
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player', // Reference to the Player model
    }],
});

// Create the model from the schema
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;