const { delay } = require("lodash")

//Delay a function
setTimeout(function() {
    console.log('Hello after 4 seconds!!')
}, 4 * 1000)

//Agora passando como argumento
const fun = () => {
    console.log('Hello after 3 seconds!!')
}

setTimeout(fun, 3 * 1000)

//with argument
const rocks = who => {
    console.log(who + ' rocks')
}

setTimeout(rocks, 2 * 1000, 'Node.js') //Node.js rocks


//challenge 1 
// const fourSeconds = () => {
//     console.log('Hello after 4 seconds!!')
// }

// setTimeout(fourSeconds, 4000);

// const eightSeconds = who => {
//     console.log('Hello after 8 seconds' + who)
// }

// setTimeout(eightSeconds, 4 * 4000, ' Ok!!')

//solution 1
const theOneFunc = delay => {
    console.log('Hello after ' + delay + ' seconds!')
}

setTimeout(theOneFunc, 4 + 1000, 4);
// setTimeout(theOneFunc, 8 * 1000, 8);
setTimeout(theOneFunc, 2 * 1000, 2)

