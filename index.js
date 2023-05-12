let button = document.getElementById('buttonCalc');
let resultadoNota = document.getElementById('resultadoNota')


const calcMedia = () => {
  let primeiraNota = prompt("Escreva a primeira nota:")
  let segundaNota = prompt("Escreva a segunda nota:")
  let terceiraNota = prompt("Escreva a terceira nota:")
  
  let total = +primeiraNota + +segundaNota + +terceiraNota

  let res = total / 3

  if(res < 4) {
    resultadoNota.innerHTML = `${res}, portando: Reprovado`
  } else if(res > 7) {
    resultadoNota.innerHTML = `${res}, portando: Aprovado`
  } else {
    resultadoNota.innerHTML = `${res}, portando: Ficará de exame`
  }
}

button.addEventListener("click", () => calcMedia())

