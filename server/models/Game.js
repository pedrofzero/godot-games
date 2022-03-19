const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

const GameModel = mongoose.model("games", GameSchema);

module.exports = GameModel