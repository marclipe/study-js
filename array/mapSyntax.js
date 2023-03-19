// arr.map(function (element, index, array) {//do something}, this);

let countries = ["Brazil", "Canada", "USA", "England", "Argentina"]

countries.map(function(element, index, array) {
    console.log(this) 
}, 80);


let arr = [2, 3, 5, 7];

arr.map(function(element, index, array) {
    console.log('Element ' + element); 
    console.log('Index ' + index);
    console.log('Array ' + array);
    return element;
}, 80)