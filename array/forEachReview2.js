const arr = [0, 1, 2, 3, 4, 5]; 

arr.forEach((value) => {
    if (value % 2 === 0) {
        console.log(value + ' é par!'); 
    } else {
        console.log(value + ' é impar!')
    }
})

console.log(arr)