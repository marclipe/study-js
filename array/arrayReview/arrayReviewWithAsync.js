const axios = require('axios')

const URL = `http://universities.hipolabs.com/search?country=United+States`

async function obterUniversidades(nome) {
    const url = URL;
    const response = await axios.get(url)
    return response.data
}


async function main(){
    try {
        const results = await obterUniversidades('a')
        // const names = []; 
        // for (const i in result.results) {
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name)
        // }

        const names = results.map(function(pessoa) {
            return pessoa.name
        })

        console.log('Universidade ', names)
    }
    catch(error) {
        console.error(error)
    }
}

main()