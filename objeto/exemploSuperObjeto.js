const rectangle = {
    logNbSides() {
        return "I have 4 sides"; 
    }
} 

const square = {
    logDescription() {
        return `${super.logNbSides()} which are all equal`;
    }
}

Object.setPrototypeOf(square, rectangle)
console.log(square)