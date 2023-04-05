//Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2,3))


//Arrow Function 
//this sempre apontará para esse objeto
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1() //true
lexico2() //true

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() //Node
//você passando um valor ele pega o valor
log('Sou mais forte') //Sou mais forte

//Operador Rest
function total(...numeros) {
    let total = 0; 
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5))