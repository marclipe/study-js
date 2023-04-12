//Handling the status codes of the Response
async function fetchText() {
    let response = await fetch('/readme.txt');

    console.log(response.status) //200
    console.log(response.statusText) //ok

    if(response.status == 200) {
        let data = await response.text();
    } 
}

fetchText()
.then(response => console.log(response))
.catch(error => console.log('Deu ruim'))