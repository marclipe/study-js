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

//Recurso do ES8 
//Objetivo de simplificar o uso de promises...
//Código muito mais síncrono 
let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')

    //retorna um Array com todas as turmas juntas
    return [].concat(ta, tb, tc)
} //retorna um objeto AsyncFunction

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))