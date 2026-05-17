alert("JS carregado");

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");

  alert("Form encontrado");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Submit funcionando");

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "admin@tereverde.com" && senha === "123") {
      alert("Login realizado com sucesso!");
      window.location.href = "admin.html";
    } else {
      alert("E-mail ou senha inválidos.");
    }
  });

});

function alterarStatus() {
  const status = document.getElementById("statusParque");

  if (status.innerText.trim() === "Aberto") {
    status.innerText = "Fechado";
    status.className = "status fechado";
  } else {
    status.innerText = "Aberto";
    status.className = "status aberto";
  }

  alert("Status atualizado com sucesso!");
}
function abrirModal() {
  document.getElementById("modalEvento").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalEvento").style.display = "none";

  alert("Evento criado com sucesso!");
}