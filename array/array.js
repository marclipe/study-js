let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[2])

aprovados[3] = 'Paulo' //adicionei elemento
aprovados.push('Abia') //adicionei elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael' 
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"];

//Primeiro é o índice que quero excluir
//Segundo é o índice na altura que quero excluir
aprovados.splice(1, 2, 'Marcos', 'Felipe')
console.log(aprovados)
