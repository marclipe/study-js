const array = [1, 2, 3, 4, 5]

// for (const iterator of array) {
//     console.log(iterator)
// }

// const novoArray = []
// array.forEach(item => {
//     novoArray.push(item * 2);
// })

// console.log(novoArray)

const novoArray = array.map(item => {
    if (item % 2 === 0) {
        return item * 10; 
    }

    return item;
})

console.log(JSON.stringify(novoArray));