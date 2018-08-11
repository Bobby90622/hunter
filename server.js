const express = require('express')
const app = express()
const querystring = require('querystring')
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, `/dist/index.html`))
})
app.get('/article', function (req, res) {
  res.sendFile(path.join(__dirname, `/dist/index.html`))
})
app.get('*', function (req, res) {
  if (req.url !== '/favicon.ico') {
    if (/\.(png|jpg|jpng)$/.test(req.url)) {
      res.sendFile(querystring.unescape(req.url))
    } else {
      const url = path.join(__dirname, '/dist', req.url)
      console.log(url, 222)
      res.sendFile(url)
    }
  }
})
app.listen('8201', () => {
  console.log(`hunter server start at port: 8201`)
})
