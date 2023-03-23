let firstNames = [
    {hero: 'spider'},
    {hero: 'super'}, 
    {hero: 'ant'},
    {hero: 'iron'}
]

let lastName = 'man'

const fullName = firstNames.map(name => name.hero + lastName)

console.log(fullName) //[ 'spiderman', 'superman', 'antman', 'ironman' ]


const names = [
    {hero: 'wonder'},
    {hero: 'super'}, 
    {hero: 'ant'},
    {hero: 'iron'}
]

const male = 'man'
const female = 'woman'

const fullnames = names.map((firstName, index) => {
    return (index === 0 || index == 1) ? firstName.hero + female : firstName.hero + male
})

console.log(fullnames) //[ 'wonderwoman', 'superwoman', 'antman', 'ironman' ]


fullnames.map((value, index) => {
    console.log(`${value} is at ${index} position!`)
})

