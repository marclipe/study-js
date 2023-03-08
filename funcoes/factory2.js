//Posso retornar os dados a partir dos parametros
function criarProduto(nome, preco) {
    //sempre retorna um objeto
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Trakinas', 2.50))
console.log(criarProduto('iPad', 1199.49))