function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    //invertendo os valores da variáveis com desestruturação
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(function(){
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    }, tempo)
   
  });
}

function gerarVariosNumeros() {
    return Promise.all([
      gerarNumerosEntre(1, 60, 4000),
      gerarNumerosEntre(1, 60, 1000),
      gerarNumerosEntre(1, 60, 500),
      gerarNumerosEntre(1, 60, 3000),
      gerarNumerosEntre(1, 60, 1500),
    ]);
}

//Verificar tempo de execução da chamada
console.time('promise')

gerarVariosNumeros()
.then((numeros) => console.log(numeros))
.then(() => {
    console.timeLog("promise");
    console.timeEnd("promise");
})
