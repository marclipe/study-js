class Veiculo {
    rodas = 4; 

    mover(direcao){
        console.log(`Movendo para a direção ${direcao}`)
    }
    virar(direcao){
        console.log(`Virando a ${direcao}`)
    }
}

class Moto extends Veiculo {
    constructor() {
        super() //puxar atributos e métodos do pai
        this.rodas = 2
    }

    mover(direcao) {
        super.mover(direcao)
        console.log('Moto em movimento!')
    }

    virar(direcao) {
        super.virar(direcao)
        console.log('Moro virando!')
    }
}

const moto = new Moto()
moto.mover('Frente') //Movendo para a direção Frente
moto.virar('Esquerda') //Virando a Esquerda

console.log(moto) //Moto { rodas: 2 }



