function showErrorModal() {
    const modal = document.getElementById('errorModal');
    modal.style.display = "block";
    const closeBtn = document.querySelector('.modal .close');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function entrar() {
    let usuario = document.getElementById('usuarioLogin').value;
    let senha = document.getElementById('senhaLogin').value;
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    let userValid = listaUser.find(user => user.userCad === usuario && user.senhaCad === senha);

    if (userValid) {
        localStorage.setItem('token', Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2));
        localStorage.setItem('userLogado', JSON.stringify(userValid));
        window.location.href = '../../index.html';
    } else {
        showErrorModal();
    }
}

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let confirmSenha = document.getElementById('confirmSenha').value;
    let cargo = document.getElementById('cargo').value;

    if (senha !== confirmSenha) {
        alert('As senhas não conferem');
        return;
    }

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    listaUser.push({ nomeCad: nome, userCad: usuario, senhaCad: senha, cargoCad: cargo });
    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    alert('Usuário cadastrado com sucesso');
    container.classList.remove("sign-up-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
});
