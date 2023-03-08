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

//Construtora
function criarPessoa(nome) {
    //Parametros do construtor vai dentro da função
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

//A forma para chamar é parecido com de uma classe
const meuNome = new criarPessoa('MarcLipe')
meuNome.falar()