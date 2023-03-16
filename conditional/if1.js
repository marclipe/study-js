function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVeradadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

//undefined é falso
seForVeradadeEuFalo()
seForVeradadeEuFalo(null)
seForVeradadeEuFalo(undefined)
seForVeradadeEuFalo(NaN)
seForVeradadeEuFalo('')
//Zero o único número que será falso
seForVeradadeEuFalo(0)
seForVeradadeEuFalo(-1) //true
seForVeradadeEuFalo(' ') //true
seForVeradadeEuFalo('?') //true
seForVeradadeEuFalo([]) //true
seForVeradadeEuFalo([1, 2]) //true
seForVeradadeEuFalo({}) //true