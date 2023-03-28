const areaDoTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3) {
        console.log('Triângulo Isósceles')
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        console.log('Triângulo Escaleno');
    } else {
        console.log('Triângulo Equilátero');
    }
}

areaDoTriangulo(5,5,5)