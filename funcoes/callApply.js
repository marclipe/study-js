function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
//Agora a partir do objeto 
console.log(produto.getPreco())

//Agora o com call
const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
//Agora com apply
console.log(getPreco.apply(carro))

//call - Primeiro é o contexto depois é o parâmetros 
console.log(getPreco.call(carro, 0.17, '$'))

//apply - Vou passar o parâmetros dentro de um array 
console.log(getPreco.apply(carro, [0.17, '$']))