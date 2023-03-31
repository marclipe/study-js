const contatadorA = require('./instanciaUnica')
const contatadorB = require('./instanciaUnica')

//chamo minha função factory após a instanciaNova
const contatadorC = require('./instanciaNova')()
const contatadorD = require('./instanciaNova')()

contatadorA.inc()
contatadorA.inc()
console.log(contatadorA.valor, contatadorB.valor)

contatadorC.inc()
contatadorC.inc()
console.log(contatadorC.valor, contatadorD.valor)

//3 3
//3 1