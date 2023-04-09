//Com Promises..
const http = require('http')

//getTurma recebe um único parâmetro que é a letra
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 
//     // console.log(nomes) Todos os nome da turma A
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         // console.log(nomes)
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })


Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas)) //spread para espalhar no método concat
  .then((alunos) => alunos.map(aluno => aluno.nome)) 
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message)) //Sempre usar tratamento de erro em Promise
  
getTurma('D').catch(e => console.log(e.message))