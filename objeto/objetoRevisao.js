//Coleção dinâmica de pares chave/valor

//new é uma forma de criar um objeto | Object no caso é uma função
const produto = new Object
produto.nome = 'Cadeira'

//Fugindo do padrão adicionando a partir de colchetes
produto['marca do produto'] = 'Generica'

console.log(produto)

//Posso usar o delete
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4', 
    valor: 89000,
    proprietario: {
        nome: 'Raul', 
        idade: 56, 
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }
}
