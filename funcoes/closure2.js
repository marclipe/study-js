function imprimeNome() {
    let nome = 'Ayrton' //Escopo externo
    //Característica do lexical scope
    //Essa function de dentro tem visibilidade dessa variável nome
    return function() {
      //Escopo interno
      return nome;
    }
}

//Function filha lembra do escopo onde foi criada
const func = imprimeNome()
console.log(func())
console.log(func())



//Não é enxergada fora desse escopo = variável privada
function minhaBiblioteca() {
    //Criei uma função que é privada, apenas usada dentro da minhaBiblioteca
    function auxiliar(valor) {
        return 10 + valor
    }

    return {
        //add5 e add7 sempre vai lembrar da função auxiliar
        add5(){
            return 10 + auxiliar(5);
        }, 
        add7() {
            return 10 + auxiliar(7);
        }
    }
}

let biblioteca = minhaBiblioteca()
console.log(biblioteca.add5())
console.log(biblioteca.add7())


//Evitar funções anônimas 
//Exemplo com  setTimeout
function imprimeNomeCompleto(nome) {
    //Essa função é chamada dentro no setTimeout
    return function() {
        console.log(nome, "Marcos");        
    }
}

function inicializa() {
    let nome = 'Felipe'; 
    //o setTimeout já invoca a minha função 
    setTimeout(imprimeNomeCompleto(nome), 1000)
}

inicializa()