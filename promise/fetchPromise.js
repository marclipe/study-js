fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.log('Olha o erro!'))

const fetchText = async() => {
    let response = await fetch('/readme.txt') 
    let data = await response.text();
    console.log(data)
}