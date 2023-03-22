const numeros = [100, 300, 500, 70]; 

// somar todos os números desse array
//Primeira forma
let soma = 0
for (let numero of numeros) {
    soma += numero;
}
console.log(soma);

const sum = numeros.reduce(function(acumulador, valorAtual) { 
    console.log(`${acumulador} ${valorAtual}`)
    return acumulador + valorAtual
}, 10)   
console.log(`Soma total: ` + sum)