const moduloA = require('../../moduloA')
console.log(moduloA)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end() //para finalizar a requisição
}).listen(8080) //escutando a porta 8080