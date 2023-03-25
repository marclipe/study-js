class Countries {
    constructor(name, continent) {
        this.name = name, 
        this.continent = continent
    }

    get nameOfConutry(){
        return this.name
    }
}

const nameCountry = new Countries('Brazil', 'South America')
console.log(nameCountry.nameOfConutry)


//Dynamic getter 
class Boletin {
    constructor(participacao, prova, trabalho) {
        this.participacao = participacao, 
        this.prova = prova, 
        this.trabalho = trabalho
    }

    get Media() {
        return parseInt((this.participacao + this.prova + this.trabalho) / 4)
    }
}

const boletimSemestral = new Boletin(8, 6, 7.5)
console.log(boletimSemestral.Media)



class NotasFatec {
    constructor(p1, p2, trabalho) {
        this.p1 = p1, 
        this.p2 = p2, 
        this.trabalho = trabalho
    }

    get Media() {
        return parseInt((this.p1 + this.p2 + this.trabalho)/3)
    }
}

const minhaNota = new NotasFatec(10, 5, 10)
console.log(`Minha média final: ${minhaNota.Media}`)
