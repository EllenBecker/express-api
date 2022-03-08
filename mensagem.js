function montaMensagem(dados) {
  var result = ''
  for (const item of dados) {
    result += ` na clinica ${item.nome} em ${item.data}, `
  }
  return result
}

module.exports = {
  montaMensagem
}