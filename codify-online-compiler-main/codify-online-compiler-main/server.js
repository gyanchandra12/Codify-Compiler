const express = require('express')
require('dotenv/config')
var cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(require('./route'))

console.log(__dirname + '/client/public/index.html')
console.log()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
