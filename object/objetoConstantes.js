//pessoa -> 123  -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//O objeto está em outro endereço de memória, terá erro
// pessoa = {nome: 'Ana'}

//Aqui estou congelando o objeto pessoa, ou seja nõa consigo mexer mais no objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

//Aqui nem a variável pode ser mudada nem objeto criado pode ser mudado
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)