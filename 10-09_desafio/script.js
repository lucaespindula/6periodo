var racas = [
  {
    nome: "Fila Brasileiro",
    origem: "Bahia",
    nativa: true,
    cor: "#a95542",
    imagem: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    porte: "Gigante",
    historia: "Raça brasileira criada para guarda e trabalho em fazendas.",
    curiosidade: "É conhecido pelo passo de urso."
  },
  {
    nome: "Terrier Brasileiro",
    origem: "São Paulo e Minas Gerais",
    nativa: true,
    cor: "#3f7656",
    imagem: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    porte: "Pequeno",
    historia: "Também chamado de Fox Paulistinha, era usado para caçar ratos.",
    curiosidade: "É um cão muito ágil e ativo."
  },
  {
    nome: "Vira-lata Caramelo",
    origem: "Todo o Brasil",
    nativa: true,
    cor: "#d39a32",
    imagem: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    porte: "Médio",
    historia: "Cão mestiço muito comum e considerado um símbolo brasileiro.",
    curiosidade: "Caramelo é uma cor, não uma raça."
  },
  {
    nome: "Shih Tzu",
    origem: "China",
    nativa: false,
    cor: "#ad7056",
    imagem: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    porte: "Pequeno",
    historia: "Cão de companhia muito popular nos lares brasileiros.",
    curiosidade: "Seu nome significa cão-leão."
  },
  {
    nome: "Labrador Retriever",
    origem: "Canadá",
    nativa: false,
    cor: "#78986d",
    imagem: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=80",
    porte: "Grande",
    historia: "Cão conhecido por ser companheiro, brincalhão e gostar de água.",
    curiosidade: "É muito usado como cão-guia."
  },
  {
    nome: "Poodle",
    origem: "França e Alemanha",
    nativa: false,
    cor: "#56745d",
    imagem: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80",
    porte: "Vários tamanhos",
    historia: "Raça inteligente e muito comum como cão de companhia.",
    curiosidade: "Pode existir nos tamanhos toy, médio e grande."
  },
  {
    nome: "Rastreador Brasileiro",
    origem: "Minas Gerais",
    nativa: true,
    cor: "#6d936d",
    imagem: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    porte: "Grande",
    historia: "Raça brasileira criada para caça e rastreamento, com ótimo olfato.",
    curiosidade: "É uma das raças brasileiras mais raras."
  },
  {
    nome: "Veadeiro Pampeano",
    origem: "Rio Grande do Sul",
    nativa: true,
    cor: "#4e554e",
    imagem: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=80",
    porte: "Grande",
    historia: "Cão dos pampas gaúchos, conhecido por correr em terrenos abertos.",
    curiosidade: "É pouco conhecido fora da região Sul."
  },
  {
    nome: "Bulldog Francês",
    origem: "França",
    nativa: false,
    cor: "#c58b54",
    imagem: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    porte: "Pequeno",
    historia: "Cão de companhia muito popular em apartamentos e cidades brasileiras.",
    curiosidade: "Precisa de cuidado em dias muito quentes."
  },
  {
    nome: "Yorkshire Terrier",
    origem: "Inglaterra",
    nativa: false,
    cor: "#555247",
    imagem: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    porte: "Muito pequeno",
    historia: "Cão pequeno criado originalmente para caçar ratos em fábricas.",
    curiosidade: "Apesar do tamanho, costuma ser bastante corajoso."
  }
];

var lista = document.getElementById("lista");
var busca = document.getElementById("busca");
var contador = document.getElementById("contador");
var modal = document.getElementById("modal");
var detalhes = document.getElementById("detalhes");
var tipoAtual = "todas";

mostrarRacas();

function mostrarRacas() {
  var texto = busca.value.toLowerCase();
  var encontrados = [];

  for (var i = 0; i < racas.length; i++) {
    var raca = racas[i];
    var nome = raca.nome.toLowerCase();
    var tipoCerto = tipoAtual === "todas" || (tipoAtual === "nativas" && raca.nativa) || (tipoAtual === "populares" && !raca.nativa);

    if (tipoCerto && nome.indexOf(texto) >= 0) {
      encontrados.push(raca);
    }
  }

  lista.innerHTML = "";
  contador.innerHTML = "Encontradas: <b>" + encontrados.length + " raças</b>";

  for (var j = 0; j < encontrados.length; j++) {
    criarCard(encontrados[j]);
  }
}

function criarCard(raca) {
  var card = document.createElement("div");
  var tipo = raca.nativa ? "Nativa" : "Popular no Brasil";

  card.className = "card";
  card.innerHTML = "<div class='cor' style='background:" + raca.cor + "'><img src='" + raca.imagem + "' alt='Foto de " + raca.nome + "' onerror='this.style.display=\"none\"'><span>🐾</span></div>" +
    "<span class='tag'>" + tipo + "</span>" +
    "<h3>" + raca.nome + "</h3>" +
    "<p>Origem: " + raca.origem + "</p>" +
    "<p>Porte: " + raca.porte + "</p>";

  card.onclick = function () {
    abrirDetalhes(raca);
  };

  lista.appendChild(card);
}

function abrirDetalhes(raca) {
  detalhes.innerHTML = "<h2>" + raca.nome + "</h2>" +
    "<p><b>Origem:</b> " + raca.origem + "</p>" +
    "<p><b>Porte:</b> " + raca.porte + "</p>" +
    "<h3>História</h3><p>" + raca.historia + "</p>" +
    "<h3>Curiosidade</h3><p>" + raca.curiosidade + "</p>";

  modal.classList.add("aberto");
}

document.getElementById("fechar").onclick = function () {
  modal.classList.remove("aberto");
};

busca.oninput = mostrarRacas;

var botoes = document.querySelectorAll(".filtro");

for (var k = 0; k < botoes.length; k++) {
  botoes[k].onclick = function () {
    for (var l = 0; l < botoes.length; l++) {
      botoes[l].classList.remove("ativo");
    }

    this.classList.add("ativo");
    tipoAtual = this.getAttribute("data-tipo");
    mostrarRacas();
  };
}

modal.onclick = function (evento) {
  if (evento.target === modal) {
    modal.classList.remove("aberto");
  }
};
