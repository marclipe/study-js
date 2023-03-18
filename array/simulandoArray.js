const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray) //{ '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)}, 
    enumerable: false
})

//Posso acessar objetos quase igual aos Arrays pelo colchete
console.log(quaseArray); //{ '0': 'Rafael', '1': 'Ana', '2': 'Bia' }
console.log(quaseArray[0]) //Rafael

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)