let contador = 1;
//contando até 10 
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let contador = 1; contador <= 10; contador++) {
    console.log(`cont ${contador}`);
}

//ex com Array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//let para ter acesso no escopo dessa variável
for(let i = 0; i < notas.length; i++) {
    //acessando cada um dos elementos do array
    console.log(`nota = ${notas[i]}`)
}