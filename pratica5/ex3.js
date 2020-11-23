lamp = document.getElementById("lampada");

function ligar() {
  lamp.classList.add("lighton");
  lamp.classList.remove("lightoff");
}

function desligar() {
  lamp.classList.add("lightoff");
  lamp.classList.remove("lighton");
}
