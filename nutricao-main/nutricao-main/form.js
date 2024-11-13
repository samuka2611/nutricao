var titulo = document.querySelector(".titulo");
titulo.textContent = "Samuel Nutrição";

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


var botaoAdicionar = document.querySelector("Adicionar paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();


  var form = document.querySelector("#form-adiciona");

  //Extraindo os dados digitando no formulário
  /tmp/guest-fcrqek/Downloads/nutricao-main/index.html
  var paciente =
 obtemPacienteDoFormulario(form);

  console.log(paciente.peso);

  //Criando a linha e as celulas da tabela do novo paciente

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = pacient.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = calculaImc(paciente.peso , paciente.altura);

  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  //Aqui adicionamos a linha com todos os seus dados na tabela do "html";

  var tabela = document.querySelector("#Tabela-pacientes");

  tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}
