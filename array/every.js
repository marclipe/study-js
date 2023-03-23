const numeros = [1, -1, 2, 3]

let todosPositivos = numeros.every(e => e >= 0);

console.log(todosPositivos) //false

const alunos = [
    {nome: 'Maria', bolsista: true},
    {nome: 'Carlos', bolsista: false},
    {nome: 'Madson', bolsista: true}
]

const todosBolsistas = alunos.every(function(aluno) {
    aluno.bolsista === true
})

console.log(todosBolsistas) //false