class Team {
    constructor(name, country){
        this.name = name,
        this.country = country
    }
}

const teamSoccer = new Team('Flamengo', 'Brazil')
const teamFootball = new Team('Toronto', 'Canada')

console.log(teamSoccer);
console.log(teamFootball)

//Team { name: 'Flamengo', country: 'Brazil' }
// Team { name: 'Toronto', country: 'Canada' }