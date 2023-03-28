console.log(module.exports) //o primeiro é impresso vazio
console.log(module.exports === this) //true
console.log(module.exports === exports) //true
console.log(this === exports) //true

//agora é visível fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

//exports é uma outra variável que aponta para o mesmo objeto
console.log(module.exports) //{ a: 1, b: 2, c: 3 }

exports = {
    nome: 'teste'
}

//continua sendo o mesmo objeto
console.log(module.exports)

//Sempre que atribuir um novo objeto para ser exportado uso:
module.exports = {publico: true}