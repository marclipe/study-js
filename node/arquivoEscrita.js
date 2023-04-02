const fs = require('fs')

const produto = {
    nome: 'Celular', 
    preco: 1249.99,
    descontos: 0.15
}

//Quero salvar esse objeto em texto então vou converter para JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    //mostra o erro ou o arquivo salvo
    console.log(err || 'Arquivo salvo')
})