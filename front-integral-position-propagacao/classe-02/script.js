const botaoFaq = document.querySelector(".button-faq");
const conteudoFaq = document.querySelector(".faq-container");

botaoFaq.addEventListener("click", function () {
    conteudoFaq.style.display === "block" ? conteudoFaq.style.display = "none" : conteudoFaq.style.display = "block";
})