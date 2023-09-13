import { Team } from "./class.js";

class Basketball extends Team {
  info() {
    console.log(`My basketball team is ${this.name}, it's in ${this.city} and you color of uniform is ${this.color}!`)
  }
}

const team = new Basketball("Miami Heat", "Miami", "Red and White")
team.info()