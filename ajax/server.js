const bodyParse = require('body-parser')
const express = require('express')
const app = express() //instanciar o express

//Definir os middlewares
app.use(express.static('.')) //sirva os arquivos estáticos
