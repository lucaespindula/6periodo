const tituloPerfil = document.querySelector("#tituloPerfil");
const campoNome = document.querySelector("#campoNome");
const botaoAtualizar = document.querySelector("#botaoAtualizar");
const contadorInteracoes = document.querySelector("#contadorInteracoes");
const botaoDescricao = document.querySelector("#botaoDescricao");
const descricao = document.querySelector("#descricao");
const botaoTema = document.querySelector("#botaoTema");

let interacoes = 0;

function atualizarNome() {
  const nomeDigitado = campoNome.value;

  if (nomeDigitado !== "") {
    tituloPerfil.textContent = "Olá, " + nomeDigitado;
  } else {
    tituloPerfil.textContent = "Olá, Visitante!";
  }

  incrementarInteracoes();
}

function incrementarInteracoes() {
  interacoes = interacoes + 1;
  contadorInteracoes.textContent = interacoes;
}

function alternarDescricao() {
  if (descricao.style.display === "none") {
    descricao.style.display = "block";
  } else {
    descricao.style.display = "none";
  }
}

function alternarTema() {
  document.body.classList.toggle("escuro");
}

botaoAtualizar.addEventListener("click", atualizarNome);
botaoDescricao.addEventListener("click", alternarDescricao);
botaoTema.addEventListener("click", alternarTema);