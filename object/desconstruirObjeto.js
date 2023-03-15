const travelCanada = {
    passport: 300, 
    visa: 415.49,
    flightTicket: 2.800, 
    house: {
        street: 'Street of Dreams', 
        city: 'Toronto',
        number: 100
    }
}

console.log(`My Array: ${travelCanada.house.city}`)

const {passport, visa} = travelCanada
console.log(passport, visa)

//Before
console.log(travelCanada.house)

//Other example declaration | After
let {flightTicket: plane, house: home} = travelCanada
console.log(plane, home)
