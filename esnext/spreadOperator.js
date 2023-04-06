const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]

//Vamos unir esses dois vetores
const numbers = [...numbers1, ...numbers2]

console.log(numbers)

/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/


const person = {
    name: "Marcos",
    age: 22,
    height: 1.75,
    company: 'Market Central'
};


const changeCompany = {
    ...person, 
    company: 'Amazon'
}

console.log(changeCompany) //{ name: 'Marcos', age: 22, height: 1.75, company: 'Amazon' }