function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1; //Posso até usar o -1 aqui 

do {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1) //única expressa depois do bloco

console.log(`Até a próxima!`);
