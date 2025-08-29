const express = require('express')
require('dotenv').config();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!')
})

app.get('/about', (req, res) => {
    res.send('This is the About Page.')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
