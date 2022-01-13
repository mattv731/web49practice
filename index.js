
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({message: "hey you person"})
})

const port = process.env.PORT || 9000 // heroku wants to set it's own port

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})