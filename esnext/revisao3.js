//ES8: Object.values/Object.entries

const numbers = {one: 1, two: 2, three: 3}
//Já tínhamos esse
console.log(Object.keys(numbers)) //[ 'one', 'two', 'three' ]


const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.entries(obj)) //[ 'one', 'two', 'three' ]

//Melhorias na Notação Literal 
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola()) ////Melhorias na Notação Literal 


//Class 
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())