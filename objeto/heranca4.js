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