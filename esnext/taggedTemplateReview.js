minhaFuncao = (texto) => {
    console.log(texto)
}

minhaFuncao('Texto com parâmetro') //Texto com parâmetro


minhaFunction = (arrayDeStrings, palavra) => {
  console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`); //Eu estudo Javascript todos os dias
};

const palavra = 'Javascript'

minhaFunction`Eu estudo ${palavra} todos os dias`