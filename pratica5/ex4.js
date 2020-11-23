var redy = document.getElementById("red").style;
var redx = document.getElementById("red").style;

var greeny = document.getElementById("green").style;
var greenx = document.getElementById("green").style;

var yellowy = document.getElementById("yellow").style;
var yellowx = document.getElementById("yellow").style;

var bluey = document.getElementById("blue").style;
var bluex = document.getElementById("blue").style;

function baralhar() {
  redy.top = Math.floor(Math.random() * 550) + "px";
  redx.left = Math.floor(Math.random() * 1400) + "px";

  greeny.top = Math.floor(Math.random() * 550) + "px";
  greenx.left = Math.floor(Math.random() * 1400) + "px";

  yellowy.top = Math.floor(Math.random() * 550) + "px";
  yellowx.left = Math.floor(Math.random() * 1400) + "px";

  bluey.top = Math.floor(Math.random() * 550) + "px";
  bluex.left = Math.floor(Math.random() * 1400) + "px";
}

var infoTop = document.getElementById("top");
var infoLeft = document.getElementById("left");
var infoCor = document.getElementById("displayCor");

function infoRed() {
  infoTop.innerHTML = redy.top;
  infoLeft.innerHTML = redx.left;
  infoCor.innerHTML = "Vermelho";
}

function infoBlue() {
  infoTop.innerHTML = bluey.top;
  infoLeft.innerHTML = bluex.left;
  infoCor.innerHTML = "Azul";
}

function infoGreen() {
  infoTop.innerHTML = greeny.top;
  infoLeft.innerHTML = greenx.left;
  infoCor.innerHTML = "Verde";
}

function infoYellow() {
  infoTop.innerHTML = yellowy.top;
  infoLeft.innerHTML = yellowx.left;
  infoCor.innerHTML = "Amarelo";
}

function infoApaga() {
  infoTop.innerHTML = "";
  infoLeft.innerHTML = "";
  infoCor.innerHTML = "";
}
