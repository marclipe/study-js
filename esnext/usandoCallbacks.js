// sem Promise...
const http = require('http')

//Vou receber a letra e uma callback
//Para receber o arquivo da turma A, B e C
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        //Receptar o evento de resposta on data 
        res.on('data', dados => {
            resultado += dados
        })

        //terminou de chegar os dados, para passar um array de objetos
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 
    // console.log(nomes) Todos os nome da turma A
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        // console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C ${a.nome}`))
            console.log(nomes)
        })
    })
})
