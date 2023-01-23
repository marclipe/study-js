const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//callback
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

//arrow function
aprovados.forEach((nome) => console.log(nome));

//arrow function com indice
// aprovados.forEach((indice) => console.log(indice));

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
