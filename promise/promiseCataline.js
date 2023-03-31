//pode receber dois parâmetros
const voceComprouOsProdutos = new Promise(function(resolve, reject){
    setTimeout(function(){
        let products = ["shirts", "shoes", "pants"];
        resolve(products);
        // reject('Deu ruim')
    }, 3000)
})

voceComprouOsProdutos.then((products) => {
    console.log(products)
}).catch((error) => {
    console.log(error)
}).finally(f => console.log('Volte sempre!'))