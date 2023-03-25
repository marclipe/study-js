class Poligono {
    constructor(altura, largura) {
        this.altura = altura,
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    //# -> método não visível lá fora 
    #calcularArea(){
        return this.altura * this.largura
    }
}

let poligono = new Poligono(10, 20)

console.log(poligono.area) //200