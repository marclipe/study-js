//Importar o módulo http
const http = require('http'); 

//Criar servidor
http.createServer(function(request, response) {
    response.write('Aprendendo Node.js com o Ralf')
    response.end();
}).listen(8080);