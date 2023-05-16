const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector(".btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10) /*Número randomico em memória assim que a aplicação começar*/
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick); //função callback
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        handleResetClick();
    }
})

function handleTryClick(event) {
   event.preventDefault();

   const inputNumber = document.querySelector("#inputNumber");

   /*Verifica se acertei o número*/
   if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();    
    document.querySelector(
    ".screen2 h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
   }
   inputNumber.value = ''
   xAttempts++;
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}