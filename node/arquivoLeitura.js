const fs = require('fs')

//Vai procurar o diretório + arquivo
const caminho = __dirname + '/arquivo.json'

// síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Para importar o formato JSON - obrigatório passar .json
const config = require('./arquivo.json')
console.log(config.db) //{ host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

//Lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})