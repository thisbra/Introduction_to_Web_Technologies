var operacao;

function getOperacao() {
  var e = document.getElementById("operacao");
  operacao = e.options[e.selectedIndex].value;
}

function calcula() {
  var x = parseFloat(document.getElementById("op1").value);
  var y = parseFloat(document.getElementById("op2").value);

  var r;

  switch (operacao) {
    case "+":
      r = x + y;
      break;
    case "-":
      r = x - y;
      break;
    case ":":
      r = x / y;
      break;
    case "*":
      r = x * y;
      break;
    case "%":
      r = Math.floor(x / y);
      break;
    // case "^":
    //   r = x - y;
    //   break;
  }

  document.getElementById("res").value = r;
}
