setTimeout(function() {
    console.log('Executando callback')

    setTimeout(() => {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)


function esperarPor(tempo = 2000) {
    //Preciso instanciar a promise
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo);
    })
}

esperarPor()
  .then(() => esperarPor())
  .then(() => esperarPor())
  /*Executando promise...
Executando promise...
Executando promise...*/