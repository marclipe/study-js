const user = {
    name: 'Marcos Felipe',
    nickname: 'MarcLipe',
    idade: 19, 
    address: {
        street: 'Rua José Ferreira',
        number: 16,
    },
}

// function mostrarIdade(user) {
//     return user.idade
// }

//Pego apenas a idade do usuário
function  mostrarIdade({idade}) {
    return idade
}

console.log(mostrarIdade(user)) //19