var titulo = document.querySelector(".titulo");
titulo.textContent = "Isabelle Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < 5; i++) {
  console.log(pacientes[i]);

  var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = pacientes[i].querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

tdImc.textContent = imc;

if (peso < 0 || peso > 600){
  tdImc.textContent = "peso inválido";
  pesoEhValido = false;
  pacientes[i].classList.add("dados-invalidos");
}

if (altura < 0 || altura > 2.00){
  tdImc.textcontent = "altura inválida"
  alturaEhValida = false;
    pacientes[i].classList.add("dados-invalidos");
}

if(pesoEhValido && alturaEhValida){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2);
 }
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("O titulo foi clicado");
}

var botaoAdicionar = document.querySelector("Adicionar paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();


  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value

  console.log (form.nome.value);
  console.log (form.altura.value);
  console.log (form.peso.value);
  console.log (form.gorduraCorporal.value);
});
