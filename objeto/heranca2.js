//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' //Não faça isso em casa!

const avo = {attr1: 'A'} //avo tem como atributo o Object.prototype
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} //pai tem como atributo o avo
const filho = {__proto__: pai, attr3: 'C'} //o filho tem como atributo o pai 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //Não vai o atributo 0 então vai virar undefined, apenas com a adição do Object.prototype


/*//=//=//=//=//=//=//=//=//=//=//=//=//=//*/
const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    //Para ver em qual velocidade o carro está 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40', 
    velMax: 324, //Vai (sombrear) o atributo original do objeto carro. Shadowing
}

const volvo = {
    modelo: 'V40',
    //Vamos usar a função status com uma adição a mais 
    status() {
        //super aqui é novo
        return `${this.modelo}: ${super.status()}`
    }
}

//primeiro objeto, depois o protótipo do objeto
//const ferrari = { 
//   __proto__: carro
// }; 
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())