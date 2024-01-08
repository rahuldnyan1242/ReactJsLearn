const dbConnection = require('./db');
const express = require('express')

dbConnection();
const app = express()
const port = 3000

app.get('/getData', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})