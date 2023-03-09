function add(a = 5, b = 3) {
    return a + b
}

function sub(a, b) {
    return a - b 
}

//Retorno implicito 
const multi = (a = 2, b = 5) => a + b  

//multi com função factory 
function div(a = 15 , b = 3) {
    return {
        a, 
        b,
        getDivide() {
            return a / b
        }
    }
}

console.log(add())
console.log(sub(10,5))
console.log(multi())

const result = div()
console.log(result.getDivide())