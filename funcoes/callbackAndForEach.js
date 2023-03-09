//forEach e callbacks

//Função declarada
//Nessa parâmetro callback foi atribuída uma função  
const myFunc = callback => {
    const value = 77

    callback(value) //invocando a função
}

//Ao invés de inserir um array ou string ou número, vamos mandar uma função
//Esse função está sendo atribuída para esse parâmetro
//Aqui a função foi invocada recebendo uma função por argumento 
myFunc((number) => {
    console.log(number)
})