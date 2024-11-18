
var titulo = document.querySelector(".titulo");
titulo.textContent = "Samuel Nutrição";


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


function calcularImc() {
    for (var i = 0; i < pacientes.length; i++) {
        console.log(pacientes[i]);

        var tdPeso = pacientes[i].querySelector(".info-peso");
        var peso = parseFloat(tdPeso.textContent); 

        var tdAltura = pacientes[i].querySelector(".info-altura");
        var altura = parseFloat(tdAltura.textContent); 

        var tdImc = pacientes[i].querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValida = true;

       
        if (peso < 0 || peso > 600) {
            tdImc.textContent = "peso inválido";
            pesoEhValido = false;
            pacientes[i].classList.add("dados-invalidos");
        }

       
        if (altura < 0 || altura > 2.00) {
            tdImc.textContent = "altura inválida";
            alturaEhValida = false;
            pacientes[i].classList.add("dados-invalidos");
        }


        if (pesoEhValido && alturaEhValida) {
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);
        }
    }
}


calcularImc();


titulo.addEventListener("click", function() {
    alert("Título clicado!");
});


var botaoAdicionar = document.querySelector("#botao-adicionar"); 
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

   
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente.peso);

    
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc.toFixed(2); 

    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    
    var tabela = document.querySelector("#Tabela-pacientes");
    tabela.appendChild(pacienteTr);

    
    calcularImc();
});


function obtemPacienteDoFormulario(form) {
    var peso = parseFloat(form.peso.value);
    var altura = parseFloat(form.altura.value); 

    var paciente = {
        nome: form.nome.value,
        peso: peso,
        altura: altura,
        gordura: form.gordura.value,
        imc: (peso && altura) ? peso / (altura * altura) : 0 
    }

    return paciente;
}
