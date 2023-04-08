//Exite tempo de Resposta
//.then/.catch

// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     })
// }

// somaDoisNumeros(2, 3)
// .then(soma => {console.log(soma)})
// .catch(err => console.log(err))


fetch("https://api.github.com/users/marclipe")
.then(response => console.log(response))
.catch(error => console.log(error))