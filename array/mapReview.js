let arr = [3, 4, 5, 6]; 

//multiply each of the array's elements by 3.
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3
}

console.log(arr) //[ 9, 12, 15, 18 

arr.map(function(value) {
    return value * 3
})

console.log('With map', arr) //With map [ 9, 12, 15, 18 ]

