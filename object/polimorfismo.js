class Atleta {
    peso; 
    categoria; 

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria(){
        if(this.peso <= 50) {
            this.categoria = 'Infantil'
        } else if (this.peso <= 65) {
            this.categoria = 'Juvenil'
        } else {
            this.categoria = 'Adulto'
        }
    }
}

const atleta = new Atleta(50)
atleta.definirCategoria()
console.log(atleta.categoria)


class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'leve'
        } else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } else if (this.pese <= 'pesado') {
            this.categoria = 'pesado'
        }
    }
}

const lutador = new Lutador(70)
lutador.definirCategoria()
console.log(lutador.categoria) //meio-leve