function alterarStatus() {

  const status = document.getElementById("statusParque");

  if (status.innerText.trim() === "Aberto") {

    status.innerText = "Fechado";

    status.classList.remove("aberto");
    status.classList.add("fechado");

  } else {

    status.innerText = "Aberto";

    status.classList.remove("fechado");
    status.classList.add("aberto");
  }
}

function abrirModal() {

  document.getElementById("modalEvento").style.display = "flex";
}

function fecharModal() {

  document.getElementById("modalEvento").style.display = "none";
}

function emitirAlerta() {

  alert("Alerta ambiental emitido com sucesso.");
}

function atualizarHorarios() {

  alert("Horários dos parques atualizados.");
}

function gerarRelatorio() {

  alert("Relatório ambiental gerado.");
}

const form = document.getElementById("loginForm");

if(form){

  form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(email === "admin@teste.com" && senha === "1234"){

      window.location.href = "admin.html";

    } else {

      alert("E-mail ou senha inválidos.");

    }

  });

}