require('./global')

//Nem preciso colocar o Global
console.log(MinhaApp.saudacao()) //Estou em todos os lugares!

//Posso mudar o valor do nome
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //Eita!