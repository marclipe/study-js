const a = 1
const b = 2
const c = 3 

//Antes no JS
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} 
console.log(obj1, obj2)

//Criar um atributo dinamicamente usando um objeto
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


//Na versão atual também suporta
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Foi alterada a forma como você define funções
const obj5 = {
    funcao1: function() {
        //...
    }, 
    funcao2() {
        //Na nova versão do ECMA
    }
}

console.log(obj5)