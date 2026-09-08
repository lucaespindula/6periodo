const botao = document.querySelector("#alternar");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  if (mensagem.style.display === "none") {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
});