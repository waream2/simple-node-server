const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
  console.log(path.join(__dirname, '/index.html'))
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'))
  console.log(path.join(__dirname, 'contact.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
  console.log(path.join(__dirname, 'about.html'))
})

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'))
});

app.listen(port, () => {
  console.log(`your app is running on ${port}`)
})
