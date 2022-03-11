const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello Welcome to ReadHat Demo!')
})

app.get('/name', (req, res) => {
  res.send('Hello My Name is Sunil Kumar M')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
