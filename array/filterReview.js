let animals = [
    {name: "Marcos", age: 21, type: "Human"}, 
    {name: "Doguinho", age: 4, type: "Hog"}, 
    {name: "Sherlock", age: 1, type: "Cat"}
]

const dog = animals.filter(function (value) {
  return value.name === "Doguinho";
});

const marc = (value) => console.log(value.age === 21)

console.log(dog)
// console.log(animals.filter(marc));
console.log(animals.length)

const itsHuman = animals.length === 3 ? "Its size right!" : "Not is size right!";
console.log(itsHuman)


let people = [
  { name: "aaron", age: 65 },
  { name: "beth", age: 2 },
  { name: "cara", age: 13 },
  { name: "daniel", age: 3 },
  { name: "ella", age: 25 },
  { name: "fin", age: 1 },
  { name: "george", age: 43 },
];

let toddlers = people.filter(person => person.age <= 3); 

// let toddlers = people.filter((person) => person.age <= 3)

// let toddlers = people.filter(function(person) {
//     return person.age <= 3
// })

console.log(toddlers)