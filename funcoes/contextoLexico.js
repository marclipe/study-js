const valor = 'Global'

//A função carrega contexto no qual foi declarada
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()