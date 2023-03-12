console.log(typeof String) //function 
console.log(typeof Array) //function 
console.log(typeof Object) //function 

//Quero reverter uma string 
String.prototype.reverse = function() {
    return this.split('').reverse().join('') //vai reverter o array e juntar na string
}

console.log('Marcos Felipe'.reverse())

//Não existe esse método
Array.prototype.first = function() {
    //você acessa o Array ou String dentro de um projeto pelo this
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) //1
console.log(['a', 'b', 'c'].first())
