let count = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");

var elemento = document.getElementsByTagName("span")[0];

var btAdicionar = document.getElementsByName("adicionar")[0];
var btSubtrair = document.getElementsByName("subtrair")[0];
var msg = document.getElementById("mensagem");

function increment() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
  if (count >= 0) {
    elemento.style.color = "#fff";
    msg.textContent = "";
  }
  if (count === 10) {
    btAdicionar.disabled = true;
    msg.textContent = "Valor Máximo!";
  }
  //console.log(msg, " a mensagem");
}
function decrement() {
  msg.textContent = "";
  count--;
  CURRENT_NUMBER.innerHTML = count;

  if (count < 0) {
    elemento.style.color = "red";
    msg.textContent = "Número negativo!";
  }
  if (count !== 10) {
    btAdicionar.disabled = false;
  }
}
btAdicionar.addEventListener("click", increment);
btSubtrair.addEventListener("click", decrement);
