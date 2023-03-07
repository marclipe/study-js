function Pessoa() {
    this.idade = 0; 
    //Para o this não variar vamos driblar e usar em uma const 
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa