function gerarNumerosEntre(min, max) {
    if (min > max) {
        //invertendo os valores da variáveis com desestruturação 
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

//random number between 1 and 60
gerarNumerosEntre(1, 60)
.then(num => num * 30) 
.then(numx10 => `O número gerado foi ${numx10}`)
.then(console.log)