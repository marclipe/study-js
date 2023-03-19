class Student {
    constructor(name, lastName, course) {
        this.name = name,
        this.lastName = lastName,
        this.course = course
    }

    greeting(){
        console.log(`Good morning ${this.name} ${this.lastName}`);
    }
}

const infoStudent = new Student('Marcos', 'Lima', 'ADS')
infoStudent.greeting() //Good morning Marcos Lima
console.log(infoStudent)