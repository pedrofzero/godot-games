const mongoose = require('mongoose')
const GameModel = require('../models/Game')


// @desc    Get a list of games
// @route   GET /api/goals
// @access  PRIVATE 
const getGame = (req, res) => {
    GameModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
}

// @desc    Get a list of games
// @route   GET /api/goals
// @access  PRIVATE 
const addGame = async (req, res) => {
    const game = req.body;
    const newGame = new GameModel(game);    
    await newGame.save();
    
    res.json(game);
}

// @desc    Get a list of games
// @route   GET /api/goals
// @access  PRIVATE 
const updateGame = (req, res) => {
    console.log(req.body)
    res.status(200).json({message: `Update Game ${req.params.id}`})}

// @desc    Delete a specific game
// @route   DELETE /api/game/:name
// @access  PRIVATE 
const deleteGame = (req, res) => {
    res.status(200).json({message: `Delete Game ${req.params.id}`})}


module.exports = {
    getGame,
    addGame,
    updateGame,
    deleteGame
}