const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Passando a função imprimir para o método forEach
fabricantes.forEach(imprimir)

//Vai retornar os fabricantes
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

//Com Arrow Function
fabricantes.forEach(fabricante => console.log(fabricante))