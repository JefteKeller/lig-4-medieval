const button = document.getElementById("reset");

button.addEventListener("click", () => {
  gridDivPai.innerHTML = "";

  grid = [];
  gridHTML = [];

  personagem = {};

  divJogador1.querySelector("div").remove();
  divJogador2.querySelector("div").remove();

  divJogador1.classList.add("jogadorAtual");
  divJogador2.classList.remove("jogadorAtual");

  jogador = 1;

  gridDivPai.addEventListener("click", adicionarPersonagem);

  document.querySelector("#telaInicial").classList.remove("invisivel");
  document.querySelector("#telaFinal").classList.add("invisivel");

  geradorGrid();
});
