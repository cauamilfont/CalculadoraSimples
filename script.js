function adicionarDisplay(valor) {
  document.getElementById("display").value += valor;
}

function limparDisplay() {
  document.getElementById("display").value = "";
}

function calcularResultado() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}
