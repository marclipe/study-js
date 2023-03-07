const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

//Sem callback 

let notasBaixas = [] //Aqui meu array de notas baixas

for(let i in notas){
    if (notas[i] < 7){
        //Para adiconar o elemento no Array push()
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


//Com Callback 
//A função callback é passada dentro do filter
const notasBaixas2 = notas.filter(function(nota) { 
    return nota < 7
})

//Arrow Function 
const notasBaixas3 = notas.filter(nota => nota < 7)


console.log(notasBaixas2)
console.log(notasBaixas3)