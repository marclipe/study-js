//let e const 
{
    var a = 2
    let b = 3
}

console.log(a)
// console.log(b)

//Template string
const produto = 'iPad'

console.log(`${produto} é caro!`)

//Destructuring, ex com uma string
const [l, e, ...tras] = "Cod3r"

console.log(l, e, tras)

//Desestruturando um Array
const [x, , y] = [1, 2, 3]; 
console.log(x, y)

//Desestruturando um objeto
const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)


