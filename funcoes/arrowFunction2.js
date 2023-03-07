function Pessoa() {
    this.idade = 0; 

    setInterval(() => {
        //O this não irá variar pois ele está no contexto da função pessoa
        this.idade++
        console.log(this.idade)
    }, 1000)
}


new Pessoa