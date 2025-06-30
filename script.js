let valorAtual = 0;

const spanValor = document.getElementById("valor")
const botaoAumentar = document.getElementById("aumentar")
const botaoDiminuir = document.getElementById("diminuir")
const botaoResetar = document.getElementById("resetar")

botaoAumentar.addEventListener("click", function() {
    valorAtual++;
    spanValor.textContent = valorAtual
});

botaoDiminuir.addEventListener("click", function() {
    valorAtual--;
    spanValor.textContent = valorAtual
});

botaoResetar.addEventListener("click", function() {
    valorAtual = 0;
    spanValor.textContent = valorAtual
});