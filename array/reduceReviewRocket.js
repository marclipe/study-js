const arr = [1, 2, 3, 4, 5];
 
const soma = arr.reduce((total, valorAtual) => {
    return total + valorAtual
}, 0);

console.log(soma)