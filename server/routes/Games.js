const express = require('express')
const router = express.Router()
const { getGame, addGame, searchGame, updateGame, deleteGame } = require('../controllers/Games')


// router.route('/').get(getGame).post(addGame)
// router.route('/:id').delete(deleteGame).put(updateGame)

/*
    THE CODE ABOVE AND BELOW IS PRACTICALLY THE SAME. JUST TO MAKE SURE I KNOW :D
*/

// // GET games list 
router.get('/', getGame)

router.get('/:id', searchGame)

// // POST games list  
router.post('/', addGame)

// // UPDATE games list 
router.put('/:id', updateGame)

// // DELETE games list 
router.delete('/:id', deleteGame)

module.exports = router