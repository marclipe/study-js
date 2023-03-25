const arr = [1, 2, 3, 4, 5];

// const todosItensSaoNumeros = arr.every(item => typeof item === 'number');

const todosItensSaoNumeros = arr.every(item => {
    return typeof item === 'string'
})

console.log(todosItensSaoNumeros) //false