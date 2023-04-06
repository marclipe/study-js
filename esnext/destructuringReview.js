const fruits = ['laranja', 'morango', 'maçã']

//Pegar só a primeira e a última
const [a, , c] = fruits

console.log(a, c) //laranja maçã


const person = {
    firstName: 'Marcos', 
    secondName: 'Felipe',
    age: 22, 
    address: {
        city: 'Barras',
        region: 'PI',
    },
}

const {firstName, secondName, address: {city}} = person

console.log(firstName, secondName, city) //Marcos Felipe Barras


//Função
const showFullName = ({firstName, secondName}) => {
    console.log(`${firstName} ${secondName}`)
}

showFullName(person) //Marcos Felipe