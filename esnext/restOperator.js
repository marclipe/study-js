const numbers = [1, 2, 3, 4, 5, 6]

const [numberOne, numberTwo, ...rest] = numbers

console.log(numberOne, numberTwo, rest); //1 2 [ 3, 4, 5, 6 ]

const person = {
  firstName: "Marcos",
  secondName: "Felipe",
  age: 22,
  address: {
    city: "Barras",
    region: "PI",
  },
};

const {firstName, ...info} = person
console.log(firstName, info)


const sum = (...params) => {
    return params.reduce(function(total, currentValue) {
        return total + currentValue
    })
}

console.log(sum(5, 5, 10, 10)) //30
