const campo = document.querySelector("#texto");
const contagem = document.querySelector("#contagem");

campo.addEventListener("input", function () {
  contagem.textContent = campo.value.length;
});