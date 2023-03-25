let iterable = [10, 20, 30]; 

for (const value of iterable) {
    console.log(value)
} 
// 10
// 20
// 30

//String 
let abc = "ABC"

for (const value of abc) {
    console.log(value)
}

//With Map objeto
let arr = new Map([["a", 1], ["b", 2], ["c", 3]])

for (const value of arr) {
    console.log(value)
}

for (const [key, value] of arr) {
   console.log(value, key) 
}