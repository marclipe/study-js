const soma = function(x,y) {
    return x + y 
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(1,2)
imprimirResultado(3, 4, soma)
//Função anônima dentro de outra função 
imprimirResultado(4, 5, function(x, y){
    return x - y 
})

// Com Arrow Function
imprimirResultado(3, 4, (x, y) => x * y)

//Função anônima dentro de um objeto 
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()

//Na outra forma da nova versão do JS
const obj = {
    talk(){
        console.log('Hello!')
    }
}

obj.talk()