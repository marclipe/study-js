const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços
let resultado = carrinho.map(function(e){
    return JSON.parse(e).preco;
})

console.log(resultado);


const names = [
    //It's a JSON string
    '{"firstName":"John", "lastName":"Doe"}',
    '{"firstName":"Anna", "lastName":"Smith"}',
    '{"firstName":"Peter", "lastName":"Jones"}'
]


let result = names.map((e) => {
    return JSON.parse(e).lastName;
 }
)


console.log(result)