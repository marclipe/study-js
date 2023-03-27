// setInterval(
//     () => console.log('Hello every 3 seconds!'), 3000
// )


const contEveryFiveSeconds = ok => {
    console.log('Hello world' + ok)
}

setInterval(contEveryFiveSeconds, 5 * 1000, ' OK!!')