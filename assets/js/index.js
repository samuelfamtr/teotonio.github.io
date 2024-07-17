function calcularDiasRestantes(deadline) {
    const hoje = new Date();
    const dataEntrega = new Date(deadline);
    const diferenca = dataEntrega - hoje;
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    return diasRestantes;
}

function verificarCargo(userLogado) {
    if (userLogado && userLogado.cargoCad) {
        document.querySelector("#user_role").textContent = userLogado.cargoCad;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const prazos = document.querySelectorAll(".prazo");

    prazos.forEach(prazo => {
        const deadline = prazo.getAttribute("data-deadline");
        const diasRestantes = calcularDiasRestantes(deadline);
        prazo.textContent += ` (${diasRestantes} dias restantes)`;
    });

    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (userLogado && userLogado.nomeCad) {
        document.querySelector("#logado").textContent = `Olá, ${userLogado.nomeCad}`;
        document.querySelector("#user_name").textContent = userLogado.nomeCad;
        verificarCargo(userLogado); // Verifica e exibe o cargo do usuário logado
    } else {
        document.querySelector("#logado").textContent = `Olá, Usuário`;
        document.querySelector("#user_name").textContent = `Usuário`;
    }

    const atividadesFeitas = {
        "Samuel": [1, 2, 3],  // IDs das atividades que Samuel fez
        "Vicente": []         // IDs das atividades que Vicente não fez
    };

    const atividades = document.querySelectorAll('.atividade');

    atividades.forEach(atividade => {
        const button = atividade.querySelector('.enviar-btn');
        const atividadeId = parseInt(button.getAttribute('data-atividade-id'));

        if (userLogado && atividadesFeitas[userLogado.nomeCad] && atividadesFeitas[userLogado.nomeCad].includes(atividadeId)) {
            button.textContent = 'Atividade concluída!';
            button.style.backgroundColor = 'green';
            button.style.cursor = 'default';
            button.disabled = true;
        }
    });

    document.getElementById('open_btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('open-sidebar');
    });

    document.getElementById('logout_btn').addEventListener('click', function() {
        sair();
    });
});

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
}
