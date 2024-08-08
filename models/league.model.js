const mongoose = require('../db/client'); // Import the Mongoose client from db.js

// Define the schema for the 'leagues' collection
const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team', // Reference to the Team model
    }],
});

// Create the model from the schema
const League = mongoose.model('League', leagueSchema);

module.exports = League;