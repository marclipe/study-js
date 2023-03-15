const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Esse x é índice do Array
for(x in nums){
    if(x == 5) {
        break
    }     
    console.log(`${x} = ${nums[x]}`)
}

console.log(`=//=//=//=//`)

for(y in nums) {
    if(y == 5) {
        continue //ele vai interromper e ir para próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log(`=//=//=//=//`);

//Crie um rótulo externo
//break rotulado, código não estruturado
externo: for(a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')