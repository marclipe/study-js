//Criar objeto e transformar em JSON
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

//Convertendo para objeto
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) - Não
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) - Não
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //Sim

//Qualquer string é por aspas duplas
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))