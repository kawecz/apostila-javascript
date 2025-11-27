const form = document.querySelector("form");
const res = document.querySelector(".res");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const jogador = document.querySelector("#jogada").value;
  const maquina = gerarEscolhaMaquina();

  if (jogador > 5 || jogador <= 0) {
    alert("Válido apenas números entre 1 a 5");
  } else {
    
    res.innerHTML = `Jogador: ${jogador}</br>`;
    res.innerHTML += `Maquina: ${maquina}`;
    resultado(jogador,maquina)
  }
});

function gerarEscolhaMaquina() {
  const opcoesTexto = [1, 2, 3, 4, 5];
  const indiceAleatorio = Math.floor(Math.random() * opcoesTexto.length);
  return opcoesTexto[indiceAleatorio];
}

function resultado(p1,p2) {
    if(p1 == p2) {
        return res.innerHTML += `</br> Jogador Acertou!`
    } else {
        return res.innerHTML += `</br> Jogadas Diferentes!`
    }
}
