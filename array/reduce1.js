const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

console.log(alunos.map(value => value.nota)) //apenas as notas com o map [ 7.3, 9.2, 9.8, 8.7 ]

//um array passando um map depois chamando um reduce
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)

    //reduce no final vai somar todas as notas
    return acumulador + atual
},/*, 10*/ 0) //passo o valor inicial

//A soma de todas as notas
console.log('Resultado final: ' + resultado) //35