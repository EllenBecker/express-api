const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { montaMensagem } = require('./mensagem')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/mensagem', (req, resp) => {
  console.log(req.body)
  const { dados } = req.body
  var result = montaMensagem(dados)
  resp.send({
    mensagem: result
  })
})

app.listen(3000, () => {
  console.log('Abriu o serviço na porta 3000')
})