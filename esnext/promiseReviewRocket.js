//Exite tempo de Resposta
//.then/.catch

const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}

somaDoisNumeros(2, 3)
.then(soma => {console.log(soma)})
.catch(err => console.log(err))

fetch("https://api.github.com/users/marclipe")
.then(response => {
    //Converte para texto - text é uma Promise
    response.json().then(body => {
        console.log(body)
    })
})
.catch(error => console.log(error))


//Promise aninhada
fetch("https://api.github.com/users/marclipe")
.then(response => {
    return response.json();
})
.then(body => {
    console.log(body)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    console.log('Ok')
})

