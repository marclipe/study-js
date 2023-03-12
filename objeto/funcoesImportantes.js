//Objeto coleção de chaves e valores
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Pegando as chaves do objeto
console.log(Object.keys(pessoa))

//Pegando os valores de um objeto 
console.log(Object.values(pessoa))

//Pegar uma lista com as chaves e os valores
console.log(Object.entries(pessoa))

//Se quiser posso até percorrer essa lista
// Object.entries(pessoa).forEach(e => {
//     //Vai retornar a chave e o valor
//     console.log(`${e[0]}: ${e[1]}`)
// })

//Agora retornando um destructuring
//Estou desestruturando os elementos de um Array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Definindo a propriedade de um objeto
//Você pode definir as características de uma propriedade 
                    //o target, e o nome da propriedade
//é um reflection, é como insert no sql
Object.defineProperty(pessoa, 'dataNascimento', {
    //aqui um objeto que vai ter todas as características da propriedade
    enumerable: true, //vai ser listado? 
    writable: false, //vai aceitar ser modificada?
    value: '01/01/2019' //agora passo o valor para essa propriedade
})

pessoa.dataNascimento = '01/01/2017' //passando outro valor, não vai funcionar 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assign (ECMAScript 2015)
//pega todos os atributos e joga em um objeto destino 
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} //o último valor sobre escrito é do último objeto se houver iguais
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)