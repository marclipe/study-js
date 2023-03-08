//mesmo antes de ter a função posso chamar ela
console.log(soma(3, 4))

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//Só posso usar a função depois de declarada
console.log(sub(4,3))

//named function expression
const mult = function multi(x, y) {
    return x * y
}

//Só posso usar a função depois de declarada
console.log(mult(4,3))

