function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Os protótipos desse objeto apontam para o mesmo objeto? true 
console.log(obj1.__proto__ === obj2.__proto__)

//o protótipo desse objeto aponta para a propriedade prototype da função construtora.
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() //vai sobre escrever

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

//obj3 está saindo de Object.prototype para MeuObjeto.prototype
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo 
//Criei uma instância de objeto a partir da função construtora, aí eles são iguais
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
//A função também tem um atributo __proto__ e esse atributo aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)

//O protótipo de uma função aponta para Object.prototype 
console.log(Function.prototype.__proto__ === Object.prototype)

//Chegou no Object.prototype ele é null, depois dele não tem nada
console.log(Object.prototype.__proto__ === null)

