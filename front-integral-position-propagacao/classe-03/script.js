const imagemModal = document.querySelector(".modal img");
const imagensBesouros = document.querySelectorAll(".imagens-besouros img");
const modal = document.querySelector(".modal");
const linkModal = document.querySelector(".modal a");

const abrirModal = (event) => {
    modal.style.display = "flex";
    imagemModal.src = event.target.src;
    linkModal.href = event.target.src;
};

imagensBesouros.forEach(imagem => imagem.addEventListener("click", abrirModal));

const esconderModal = () => {
    modal.style.display = "none";
}

modal.addEventListener("click", esconderModal);

const pararEventoLink = (event) => {
    event.stopImmediatePropagation();
}

linkModal.addEventListener("click", pararEventoLink);