const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad pro', preco: 4199, fragil: true}, 
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},  
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500

// const caro = function(produto){
//     return produto.preco >= 500
// }

const fragil = produto => produto.fragil

// const fragil = function(produto){
//     return produto.fragil
// }

const myNote = produto => produto.nome === 'Notebook'

console.log(produtos.filter(caro).filter(fragil).filter(myNote))

// console.log(produtos.filter(myNote))