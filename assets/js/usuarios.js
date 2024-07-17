document.addEventListener("DOMContentLoaded", function() {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (userLogado && userLogado.cargoCad === "Administrador") {
        document.getElementById('usuarios-container').style.display = 'block';
        atualizarListaUsuarios();
    } else {
        document.getElementById('usuarios-container').innerHTML = "<p>Você não tem permissão para acessar esta página.</p>";
    }

    const logadoElement = document.querySelector("#logado");
    if (userLogado) {
        logadoElement.textContent = `Olá, ${userLogado.nomeCad}`;
        document.getElementById("user_name").textContent = userLogado.nomeCad;
        document.getElementById("user_infos").insertAdjacentHTML('beforeend', `<span class="item-description">${userLogado.cargoCad}</span>`);
    }
});

function atualizarListaUsuarios() {
    const usuariosContainer = document.getElementById('usuarios-container');
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    usuariosContainer.innerHTML = '';  // Limpa a lista de usuários
    listaUser.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user-item');
        userDiv.innerHTML = `
            <h3>${user.nomeCad}</h3>
            <p>Usuário: ${user.userCad}</p>
            <p>Cargo: ${user.cargoCad}</p>
        `;
        usuariosContainer.appendChild(userDiv);
    });
}
