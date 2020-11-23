/* Função de validação  */
function validate() {
  var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
  /* TODO */

  retVal = false;
  // NOME

  var nome = document.getElementById("Nome").value;
  var nomeAlert = document.getElementById("NomeError");
  console.log(nome.trim());
  if (nome.trim().length < 3) {
    retVal = false;
    nomeAlert.classList.add("d-block");
  } else nomeAlert.classList.remove("d-block");

  // MORADA

  var morada = document.getElementById("Morada").value;
  var moradaAlert = document.getElementById("MoradaError");
  console.log(morada.split(" "));
  if (morada.split(" ").length < 3) {
    retVal = false;
    moradaAlert.classList.add("d-block");
  } else moradaAlert.classList.remove("d-block");

  // CURSO

  var curso = document.getElementById("Curso").selectedIndex;
  var cursoAlert = document.getElementById("CursoError");

  if (curso == "") {
    retVal = false;
    cursoAlert.classList.add("d-block");
  } else cursoAlert.classList.remove("d-block");

  // TRANSPORTE

  var _transportesSelecionados = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  var transporteAlert = document.getElementById("VehicleError");
  if (_transportesSelecionados < 2) {
    retVal = false;
    transporteAlert.classList.add("d-block");
  } else transporteAlert.classList.remove("d-block");
  return retVal;
}
