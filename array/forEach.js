const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//callback
aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array);
});

//arrow function
aprovados.forEach((nome) => console.log(nome));

//arrow function com indice
// aprovados.forEach((indice) => console.log(indice));

//Armazenar uma função em uma variável
const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
