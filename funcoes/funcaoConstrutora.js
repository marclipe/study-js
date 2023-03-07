function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado 
    let velocidadeAtual = 0

    //metodo publico | Vai acrescentar a velocidade atual
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual+= delta 
        } else { 
            velocidadeAtual = velocidadeMaxima
        }                                                                   
    }

    //metodo publico | Permitir acesso a velocidade atual
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}


const uno = new Carro
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())