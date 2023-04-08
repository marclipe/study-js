function falarDepoisDe(segundos, frase) {
    //Vai retornar uma Promise que vai receber uma callback
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            //situação de sucesso
            resolve(frase)
        }, segundos * 1000)
    })
}

//Para acessar o resultado de uma Promise de uma forma correta
falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFase => console.log(outraFase))
    .catch(error => console.log(error))
