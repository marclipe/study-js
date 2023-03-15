const pai = {nome: 'Pedro', corCabelo: 'preto'}

//criar o objeto filho a partir do pai, passo o pai com o primeiro parâmetro
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

//Vai estabelecer um relação de protótipo, automaticamente ele já tem acesso aos demais atributos
const filha2 = Object.create(pai, {
    //Criando outros atributos
    nome: {value: 'Bia', writable: false, enumerable: true} 
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    // console.log('Filha 2 key ' + key)
    //Aquela propriedade pertence a ela? 
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança: ${key}`)
}