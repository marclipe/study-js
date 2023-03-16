const sequence = {
    _valor: 1, //convenção - é que variável só é acessada de forma interna

    //Os valores são acessado 
    get valor() {return this._valor++}, //aqui ler o valor
    set valor(valor) { //aqui define o atributo valor como parâmetro 
        //Sò entra no teste se o valor que passei for maior que po da sequência 
        if(valor > this._valor) {
            this._valor = valor
        }
    } 
}

//Estou acessando um atributo mas internamente ele está chamando get e set
console.log(sequence.valor, sequence.valor)
sequence.valor = 1000
console.log(sequence.valor, sequence.valor)
sequence.valor = 900 //ignorou o set 
console.log(sequence.valor, sequence.valor)
