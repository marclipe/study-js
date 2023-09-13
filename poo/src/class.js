export class Team {
  constructor(name, city, color) {
    this.name = name;  
    this.city = city
    this.color = color; 
  }

  info() {
    console.log(`My team is ${this.name}, it is in ${this.city} and your color is ${this.color}`)    
  }
}

const team = new Team("Toronto", "Toronto", "Red and Black")
team.info()
const flamengo = new Team("Flamengo", "Rio de Janeiro", "Red and Black")
flamengo.info()