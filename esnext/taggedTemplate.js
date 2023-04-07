function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

//Para testar
const aluno = 'Gui'
const situacao = 'Aprovado'
//Passando a Template string para dentro da função tag
//Dois arrays
console.log(tag `${aluno} está ${situacao}.`)
/*
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra string
*/