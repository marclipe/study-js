const ferrari = {
    modelo: 'F40', 
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//.__proto__ -> Posso acessar o protótipo do meu objeto, meu objeto pai
//Se ele achar retorna, se não retorna undefined
console.log(ferrari.__proto__)
//Atributo disponível também no Node
console.log(ferrari.__proto__ === Object.prototype)
//Vai apontar sempre para o Object.prototype
console.log(volvo.__proto__ === Object.prototype)
//O protótipo do Object.prototype aponta para nulo
console.log(Object.prototype.__proto__)

console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}

//São suas funções
console.log(typeof Object, typeof MeuObjeto)

console.log(Object.prototype, MeuObjeto.prototype)