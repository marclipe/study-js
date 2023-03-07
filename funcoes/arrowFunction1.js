let dobro = function(a) {
    return 2 * a
}

// Arrow Function sempre é uma função anônima
//Opção 1
dobro = (a) => {
    return 2 * a
}

//Opção 2 - Função de uma única linha 
dobro = (a) => 2 * a //return está implícito 
console.log(dobro(Math.PI)) //O dobro do PI


let ola = function() {
    return 'Olá'
}

ola = () => "Olá"
console.log(ola())

ola = _ => 'Olá'

