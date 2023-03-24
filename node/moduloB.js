let a = 2 //visível só dentro do módulo

//forma mais clássica de exportar para fora do módulo
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}