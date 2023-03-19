'{"name": "Marcos Felipe", "age": "23", "city": "Toronto"}'

const user = JSON.parse('{"name": "Marcos Felipe", "age": "23", "city": "Toronto"}')

console.log(user) //{ name: 'Marcos Felipe', age: '23', city: 'Toronto' }

const arr = ['{"name": "Marcos Felipe", "age": "23", "city": "Toronto"}']

const myObject = arr.map(function(element) {
    return JSON.parse(element).name
})

console.log(myObject) //[ 'Marcos Felipe' ]