var op = "";
var n1 = "";
var n2 = "";

function addNumber() {
  var n = event.target.value;

  var res = document.getElementById("res");

  if (res.innerHTML != 0) {
    res.innerHTML = res.innerHTML + n;

    if (op != "") {
      n2 = n2 + n;
    } else {
      n1 = n1 + n;
    }
  } else {
    res.innerHTML = n;
    n1 = n;
  }

  console.log("n1: " + n1);
  console.log("n2: " + n2);
}

function addOperation() {
  var res = document.getElementById("res");

  if (res.innerHTML == 0 || op != "") res.innerHTML = "Error!";
  else {
    op = event.target.value;
    n1 = res.innerHTML;
    res.innerHTML = res.innerHTML + op;
  }

  console.log(op);
}

function clearResult() {
  var res = document.getElementById("res");
  res.innerHTML = 0;
  op = "";
  n1 = "";
  n2 = "";
}

function calculate() {
  var res = document.getElementById("res");

  if (op == "") res.innerHTML = "Error!";
  else {
    switch (op) {
      case "+":
        res.innerHTML = parseInt(n1) + parseInt(n2);
        break;
      case "-":
        res.innerHTML = parseInt(n1) - parseInt(n2);
        break;
      case "/":
        res.innerHTML = parseInt(n1) / parseInt(n2);
        break;
      case "*":
        res.innerHTML = parseInt(n1) * parseInt(n2);
        break;
      default:
        console.log("Não pegou");
    }
  }

  op = "";
  n1 = "";
  n2 = "";
}
