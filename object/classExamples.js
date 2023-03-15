class Dog {
    constructor(breed) {
        this.dogname = breed
    }

    present() {
        return 'I have a ' + this.dogname
    }
}

class Type extends Dog{
    constructor(breed, typ) {
        super(breed)
        this.type = typ;
    }

    show() {
        return this.present() + ', it is a ' + this.type; 
    }
}

let myDog = new Type("Dog", "Bull Terrier")
console.log(myDog.show())