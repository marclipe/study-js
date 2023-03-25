const arr = [1, 2, 3, 4, 5];

//retornar apenas os impares
const novoArray = arr
.filter(item => item % 2 !== 0)
.map(item => item * 10); //Depois percorrer e multiplicar

console.log(novoArray) //[ 1, 3, 5 ]