document.addEventListener("DOMContentLoaded", function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));
    const mensagemAdm = document.getElementById("mensagem_adm");

    if (userLogado && userLogado.cargoCad === "Administrador") {
        mensagemAdm.textContent = `Calma lá, ${userLogado.nomeCad}. O painel está sendo construído!`;
    } else {
        mensagemAdm.textContent = "Você não tem acesso a esta página.";
    }

    const logadoElement = document.querySelector("#logado");
    if (userLogado && userLogado.nomeCad) {
        logadoElement.textContent = `Olá, ${userLogado.nomeCad}`;
    } else {
        logadoElement.textContent = "Olá, Usuário";
    }

    const userNameElement = document.querySelector("#user_name");
    if (userLogado && userLogado.nomeCad) {
        userNameElement.textContent = userLogado.nomeCad;
    } else {
        userNameElement.textContent = "Usuário";
    }

    const userRoleElement = document.querySelector("#user_role");
    if (userLogado && userLogado.cargoCad) {
        userRoleElement.textContent = userLogado.cargoCad;
    }
});
