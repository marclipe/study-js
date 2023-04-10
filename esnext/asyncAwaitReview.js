async function buscaDadosNoGithub() {
  try {
      //aguardar alguma coisa executar
    const response = await fetch("https://api.github.com/users/marclipe")
    const body = await response.json();

    console.log(body)

    return body.name
  } catch (err) {
    console.log(err)
  } finally {
    console.log('deu')
  }
}

buscaDadosNoGithub().then(name => {
    console.log(name)
})