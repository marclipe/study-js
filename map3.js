Array.prototype.map2 = function(callback) {
    const newArray = []; //Cria um novo array
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)); //Passa o elemento, o índice e o array
    }

    return newArray; //Retorna o novo array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Solução do professor
const paraObjeto = json => JSON.parse(json); //Converte o texto para objeto
const apenasPreco = produto => produto.preco; //Pega o preço do objeto

const resposta = carrinho.map2(paraObjeto).map2(apenasPreco); //Chama as funções

console.log(resposta);