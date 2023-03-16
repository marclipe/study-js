class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//Relação de protótipo sendo definida aqui
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //instanciando a a função construtora da super classe
        this.profissao = profissao
    }
}

class Filho extends Pai {
    //Vai pegar o sobrenome do pai
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)