const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //undefined
//Jeito adequado de acessar 
console.log(tecnologias.get('react')) //{ framework: false }
console.log(tecnologias.get('react').framework)//false

console.log('\n')

//Criar um map atribuindo os elementos
const chavesVariadas = new Map([
    //Vou passar chave e valor
    [function (){ }, 'Função'],
    [{}, 'Objeto'], 
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //true
console.log(chavesVariadas.delete(123)) 
console.log(chavesVariadas.has(123)) //false 
console.log(chavesVariadas.size) //2

console.log('\n')

//Chave não aceita repetição, Valor sim
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)