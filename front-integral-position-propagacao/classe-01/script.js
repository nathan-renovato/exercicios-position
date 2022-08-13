const botaoMostrarSenha = document.querySelector(".form-input-eye");
const inputSenha = document.querySelector(".input-password");

const mostrarSenha = (event) => {
    const botaoClicado = event.target;

    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        botaoClicado.src = "./assets/olho-aberto.svg";
    } else {
        inputSenha.type = "password";
        botaoClicado.src = "./assets/olho-fechado.svg";
    }
};

botaoMostrarSenha.addEventListener("click", mostrarSenha);



