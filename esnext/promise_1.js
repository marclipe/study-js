// let a = 1; 
// console.log(a)

//Uma promessa que vai te dar um dado no futuro
let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

//then para acessar a Promise
.then(valor => valor[0]) //Ana
.then(primeiro => primeiro[0]) //A
.then(letra => letra.toLowerCase()) 
.then(letraMinuscula => console.log(letraMinuscula)) //a
// console.log(typeof p) //Object