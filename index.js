const user = process.env.USERNAME
const cohort = process.argv[2]

if (process.argv[2] === 'web-49'){
    console.log(`welcome ${user} to ${cohort}`)
} else {
    console.log(`Boooooo ${cohort}`)
}

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({message: "hey you person"})
})

const port = 9000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})