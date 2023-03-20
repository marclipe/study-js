Array.prototype.filter2 = function(callback) {
    const newArray = [] //Vou gerar um novo array
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            //Adiciona ao índice atual
            newArray.push(this[index])
        }
    }

    return newArray //tenho que retornar o meu Array
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad pro', preco: 4199, fragil: true}, 
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},  
]

const caro = (produto) => produto.preco >= 500;

const fragil = (produto) => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));