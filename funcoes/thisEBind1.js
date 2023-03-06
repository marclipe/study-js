const pessoa = {
    saudacao: 'Bom dia!', 
    falar(){
        //acessando a tributo de um objeto usando o this
        console.log(this.saudacao); 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()


//Posso usar o bind para consertar 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
