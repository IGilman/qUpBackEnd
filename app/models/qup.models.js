const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating Schemas
const qupsSchema = new Schema(
    {
        username: String,
        game: String,
        kd: Number,
        playStyle: String,
        discord: Boolean
    }
);

const gamesSchema = new Schema(
    {
        game: String,
        logoURL: String
    }
);

// Creating model objects
const Qups = mongoose.model('qups', qupsSchema);
const Games = mongoose.model('games', gamesSchema);

// Exporting model objects
module.exports = {
    Qups, Games
}