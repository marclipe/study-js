for (let letra of "Cod3r") {
    console.log(letra)
}

console.warn('\n')

const assuntosEcma = ['Map', 'Set', 'Promise']

//percorre em cima de índice 
for (let i in assuntosEcma) {
    console.log(i)
} 

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

console.log("\n");

//Com Map
const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ['Promise', {abordado: false}]
]);

for (let assunto of assuntosMap) {
    console.log(assunto)
}

console.log('\n')

//Percorrer Chaves do Map
for (let chave of assuntosMap.keys()) {
    console.log(chave)
} //Map Set Promise

//Percorrer Valores do Map
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
/*
{ abordado: true }
{ abordado: true }
{ abordado: false } */

//Percorrer as entradas
//Vamos desestruturar pegando a chave e o valor
for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

/*
Map { abordado: true }
Set { abordado: true }
Promise { abordado: false }*/

const s = new Set(['a', 'b', 'c'])
for (const letra of s) {
    console.log(letra)
} /*a b c*/