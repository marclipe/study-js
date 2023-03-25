const arr = [1, 2, 3, 4, 5];

const peloMenosUmItemNaoEUmNumero = arr.some(item => {
    return typeof item !== 'number'
});

console.log(peloMenosUmItemNaoEUmNumero) //false