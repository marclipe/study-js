const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton')
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

//splice para adicionar e remover elementos

//adicionar no índice 2, não vou remover ninguém e adiciono dois
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//remover no índice 3 apenas 1 
pilotos.splice(3, 1) //Massa quebrou :(
console.log(pilotos) //[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos = pilotos.slice(2) //novo array, nesse caso a partir do índice 2
console.log(algunsPilotos) //[ 'Bottas', 'Raikkonen', 'Verstappen' ]

//pegando do índice 1 ao 4, mas sem pegar o índice 4
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2) //[ 'Alonso', 'Bottas', 'Raikkonen' ]
