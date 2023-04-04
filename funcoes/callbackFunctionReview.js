function add(a, b) {
    return a + b
}

function divide(a, b) {
    return a / b
}

function calculate(x, y, operation) {
    return operation(x, y)
}

console.log(calculate(2, 3, add)); //5

console.log(divide(10, 5, divide)); //2


