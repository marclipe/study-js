const dogBreed = ["Labrador", "Bulldog", "Poodle", "Beagle", "Boxer"];

// forEach() method
const logArrayElements = (dog, index, array) => {
    console.log(index, dog, array);
}

dogBreed.forEach(logArrayElements);
