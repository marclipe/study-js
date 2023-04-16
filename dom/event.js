const btn = document.querySelector('#myButton'); 
//recebe dois argumentos
btn.addEventListener('click', () => {
    setTimeout(() => {       
        document.getElementsByTagName("body")[0].innerHTML = "OKKKK";
        alert('MarcLipe')
    }, 3000)

    // document.querySelector('body').innerHTML = '<p>Mark</p>'
}) 