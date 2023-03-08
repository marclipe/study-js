//Classe Pessoa
class Pessoa {
    //Cria-se o objeto nome
    constructor(nome) {
        this.nome = nome 
    }

    //Aqui o método falar
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Factory
const criarPessoa = nome => {
    //Esse objeto tem ciência do contexto léxico que foi declarado
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Marcos Felipe')
p2.falar()