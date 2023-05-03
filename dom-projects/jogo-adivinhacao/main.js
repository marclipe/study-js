const handleClick = document.querySelector('.handleClick')

handleClick.addEventListener('click', function(event){
    event.preventDefault() /*Para não carregar a página*/

    const inputNumber = document.querySelector("#inputNumber");
    console.log(inputNumber.value); /*Está pegando o valor no campo digitado*/
})