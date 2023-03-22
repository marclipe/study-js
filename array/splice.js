let browsers = ["chrome", "firefox", "edge", "opera", "safari"];

//remove
browsers.splice(3,4) //"opera", "safari"

console.log(browsers) 

//Se o segundo parâmetro não for declarado, todos os elementos a começar do índice fornecido serão removidos do array
browsers.splice(2)
console.log(browsers)

let nav = ["chrome", "firefox", "edge", "opera", "safari"];

//remove 3 elements and add 2 elements
nav.splice(0, 4, "brave", 'DuckDuckGo', 'Vivaldi');
console.log(nav)