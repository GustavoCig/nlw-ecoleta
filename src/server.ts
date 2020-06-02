import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('xesquedelen')

  response.json(
    [
      'xesque',
      'delen'
    ]
  )

});

app.listen(3333)
