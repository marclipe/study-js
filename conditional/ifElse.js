const imprimirResultados = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultados(10)
imprimirResultados(1.4)
imprimirResultados('Epa!') //erro com string - cuidado!!