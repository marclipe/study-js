class Cidade {
    constructor(rua, bairro, numero) {
        this.rua = rua,
        this.bairro = bairro, 
        this.numero = numero
    }

    get nomeDaRua() {
        return this.rua
    }

    set nomeDaRua(nomeDaRua) {
        this.rua = nomeDaRua
    }  
}

const minhaRua = new Cidade('', 'Matadouro', 10)
minhaRua.nomeDaRua = 'Manuel José de Almeida'
console.log(minhaRua.rua)

class Brazil {
    constructor(currency, population, states){
        this.currency = currency, 
        this.population = population,
        this.states = states
    }

    get nameCurruncy (){
        return this.currency
    }

    set nameCurruncy(nameCurruncy) {
        return this.currency = nameCurruncy
    }
}

const currencyBrazil = new Brazil('', 214.3, 26)
currencyBrazil.nameCurruncy = 'Real'
console.log(currencyBrazil.nameCurruncy)





