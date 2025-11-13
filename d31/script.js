const Formulario = document.querySelector("form");
const btn = document.querySelector("button").addEventListener("click", () => {
  opcoes.forEach((e) => {
    e.classList.remove("act");
  });
  jogadaP = undefined;
  resultado.innerHTML = "...";
});
const opcoes = [
  document.querySelector("#pedra"),
  document.querySelector("#papel"),
  document.querySelector("#tesoura"),
];
const resultado = document.querySelector("span");
let jogadaP;

//-----------------------------MAIN--------------------------------------------------------//
Formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (jogadaP == undefined) {
    alert("Escolha uma opção");
  } else {
    const maquina = gerarEscolhaMaquina();

    function resultadoGame(p1, p2) {
      if (p1 == p2) {
        resultado.innerHTML = `<h3>Jogador: ${jogadaP} || Maquina: ${maquina} = EMPATE </h3>`;
      } else if (
        (p1 == "pedra" && p2 == "tesoura") ||
        (p1 == "tesoura" && p2 == "papel") ||
        (p1 == "papel" && p2 == "pedra")
      ) {
        resultado.innerHTML = `<h3>Jogador: ${jogadaP} || Maquina: ${maquina} = Jogador Venceu </h3>`;
      } else if (
        (p2 == "pedra" && p1 == "tesoura") ||
        (p2 == "tesoura" && p1 == "papel") ||
        (p2 == "papel" && p1 == "pedra")
      ) {
        resultado.innerHTML = `<h3>Jogador: ${jogadaP} || Maquina: ${maquina} = Maquina Venceu </h3>`;
      }
    }
    
    resultadoGame(jogadaP, maquina);
  }
});

const escolhaJogador = [...opcoes];

escolhaJogador.map((e) => {
  e.addEventListener("click", () => {
    // console.log("clicou em " + e.textContent);
    opcoes.forEach((e) => {
      e.classList.remove("act");
    });

    e.classList.toggle("act");
    jogadaP = e.textContent.toLowerCase();
  });
});

function gerarEscolhaMaquina() {
  const opcoesTexto = ["pedra", "papel", "tesoura"];
  const indiceAleatorio = Math.floor(Math.random() * opcoesTexto.length);
  return opcoesTexto[indiceAleatorio];
}
