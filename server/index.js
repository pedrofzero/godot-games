const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT | 5000;

const app = express();

app.use( express.json() )
app.use(express.urlencoded ({extended: false}) )
app.use(cors())

app.use('/api/games', require('./routes/Games.js'))


// to be added on a separate database file 

mongoose.connect("mongodb+srv://pedrofzero:luzzjss78INZzDjP@cluster0.ychyz.mongodb.net/GodotGames?retryWrites=true&w=majority")


app.listen(PORT, () => console.log(`Server is listening on port ${PORT} successfully`))

