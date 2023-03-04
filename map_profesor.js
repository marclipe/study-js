
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Solução do professor
const paraObjeto = json => JSON.parse(json); //Converte o texto para objeto
const apenasPreco = produto => produto.preco; //Pega o preço do objeto

const resposta = carrinho.map(paraObjeto).map(apenasPreco); //Chama as funções

console.log(resposta);