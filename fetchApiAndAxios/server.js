const bodyParse = require('body-parser')
const express = require('express')
const app = express() //instanciar o express

//Definir os middlewares
app.use(express.static('.')) //sirva os arquivos estáticos
app.use(bodyParse.urlencoded({extended: true})) //Se vir um submit de um formulário esse vai vir e vai transformar isso em objetos
app.use(bodyParse.json()) //se vir JSON esse será utilizado

app.get('/teste', (req, res) => {res.send(new Date)})
app.listen(8080, () => console.log('Executando...')) //inicia o servidor 

app.post('formulario', (req, res) => {
    res.send({
        ...res.body, 
        id: 7
    })
})

