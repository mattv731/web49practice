// injects the config vars inside the .env
require('dotenv').config()

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({message: "hey you person"})
})

app.get('/', (req, res) => {
    res.send(`<h1>Web 49 test</h1>`)
})

const port = process.env.PORT || 9000 // heroku wants to set it's own port

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})