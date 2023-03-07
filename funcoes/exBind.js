const pessoa = {
    nome: "MarcLipe", 
    idade: 21, 
    saudacao: function() {
        console.log('Olá, meu nome é ' + this.nome + " e eu tenho " + this.idade + ' anos.'); 
    }
}

const novaSaudacao = pessoa.saudacao.bind(pessoa)
novaSaudacao();