//Para ter acesso ao que foi exportado - require
const moduleA = require('./moduloA')
const moduleB = require('./moduloB')

console.log(moduleA.ola)
console.log(moduleA.bemVindo)
console.log(moduleA.ateLogo)
console.log(moduleA)

console.log(moduleB.bomDia)
console.log(moduleB.boaNoite()) //chamando a função
console.log(moduleB)