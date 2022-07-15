const express = require('express')
const app = express()
const data = require('./data/db.json')

app.get('/songs', (req, res) => {
    res.json(data['songs'])
})

app.get('/song/:id', (req, res) => {
    res.json(data['songs'])
})

app.get('/allGenres', (req, res) => {
    res.json(data[''])
})

app.listen(5000, () => (console.log("Server start on port 5000")))