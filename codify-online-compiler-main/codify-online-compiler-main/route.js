const request = require('request')
const express = require('express')
const { clientId, clientSecret } = require('./config')
const router = express.Router()

router.post('/run', (req, res) => {
  var data = {
    script: req.body.code,
    language: req.body.lang,
    stdin: req.body.input,
    versionIndex: '4',
    clientId,
    clientSecret,
  }
  request(
    {
      url: 'https://api.jdoodle.com/v1/execute',
      method: 'POST',
      json: data,
    },
    function (error, response, body) {
      //   console.log('error:', error)
      //   console.log('statusCode:', response && response.statusCode)
      //   console.log('body:', body)
      if (error) {
        return res.json({ error: 'internal server error' })
      }
      return res.json(body.output)
    }
  )
})

module.exports = router
