function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min

        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio);
        }
    })
}

async function gerarMegaSena(quantidadeDeElementos) {
    try {
        const numeros = []
        for(let _ of Array(quantidadeDeElementos).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw "Que chato!" //lancei uma exceção 
    }
}
gerarMegaSena(8)
.then(console.log)
.catch(console.log)