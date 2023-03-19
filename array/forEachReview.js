const numbers = [1, 2, 3, 4, 5]; 

//Using the traditional "for loop" to loop through the array
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

//With callback function or anonymous function
numbers.forEach(function(value, index) {
    console.log(value, index)
})

const languages = ['English', 'French', 'German', 'Portuguese', 'Spanish']

//arrow function simplifying the code
languages.forEach((value, index) => console.log(value, index))

//Value and index
languages.forEach((value, index) => {
    console.log(`Index: ${index} Value: ${value}`)
})

//Now our Array
languages.forEach(function(value, index, array) {
    console.log(languages)
})


