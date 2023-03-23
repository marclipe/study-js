Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]; 
    for (let index = indiceInicial; index < this.length; index++) {
        acumulador = callback(acumulador, this[i], index, this)
    }

    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma, 21))