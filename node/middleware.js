//middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1',
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

//Não quero que chame o next
const passo3 = ctx => ctx.valor3 = 'mid3'

//Vai pegar o operador rest e juntar eles em um array
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        //verifico se o array está setado 
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx) //{ valor1: 'mid1', valor2: 'mid2', valor3: 'mid3' }