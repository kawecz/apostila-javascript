const div_carros = document.querySelector(".carros");
const form = document.querySelector("form");
const res = document.querySelector(".res");
const reset_btn = document.querySelector("input[type=reset]");
let carros = [];
let carroEscolhido;

// Criando imagens dos carros (popular e luxo)

const carroPopularImagem = document.createElement("img");
const carroLuxoImagem = document.createElement("img");

carroPopularImagem.setAttribute(
  "src",
  "https://img.br.my-best.com/product_images/0cd66c7f6c15a3aac621ba36fb56ae88.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=e98015e4751f71d0e21b562941b48483"
);
carroPopularImagem.setAttribute("data-nome", "Popular");
carroLuxoImagem.setAttribute(
  "src",
  "https://www.mundilimos.com.br/wp-content/uploads/bb-plugin/cache/Sedan-BMW-landscape-cb2584a8532f6c6cf8afa8009aa4c2e5-2on3dcqsl0hb.png"
);
carroLuxoImagem.setAttribute("data-nome", "Luxo");

div_carros.appendChild(carroPopularImagem);
div_carros.appendChild(carroLuxoImagem);
// console.log(div_carros);
carros.push(carroLuxoImagem, carroPopularImagem);
// console.log(carros)

carros.forEach((carro) => {
  carro.addEventListener("click", (e) => {
    carros.forEach((e) => {
      e.classList.remove("ativo");
    });
    e.target.classList.add("ativo");
    carroEscolhido = e.target.dataset.nome;
    // alert("cliado em " + e.target.dataset.nome);
    // verificarSelecao();
  });
});

function verificarSelecao() {
  if (carroEscolhido) {
    return carroEscolhido;
  } else {
    return `Nenhum carro selecionado.`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dias_alugados = document.querySelector("#dias_alugado").value;
  const km_rodados = document.querySelector("#km_percorrido").value;

  function Calculo() {
    if (!carroEscolhido) {
      return alert("Selecione um carro primeiro!");
    }
    let precoDiaria = 0;
    let taxaKm = 0;
    const tipo = verificarSelecao();
    let valorFinal;

    if (tipo == "Popular" && km_rodados <= 100) {
      precoDiaria = 90 * dias_alugados;
      taxaKm = 0.2 * km_rodados;
      valorFinal = precoDiaria + taxaKm;
      return `<p>Carro Selecionado: ${verificarSelecao()} </br> Dias: <strong>${dias_alugados}</strong> </br> Km: <strong>${km_rodados}</strong> </br> Valor Final: <strong>R$${valorFinal.toFixed(2)}</strong></p> `;
    } else if (tipo == "Popular" && km_rodados > 100) {
      precoDiaria = 90 * dias_alugados;
      taxaKm = 0.1 * km_rodados;
      valorFinal = precoDiaria + taxaKm;
      return `<p>Carro Selecionado: <strong>${verificarSelecao()}</strong> </br> Dias: <strong>${dias_alugados}</strong> </br> Km: <strong>${km_rodados}</strong> </br> Valor Final: <strong>R$${valorFinal.toFixed(2)}</strong></p> `;
    } else if (tipo == "Luxo" && km_rodados <= 200) {
      precoDiaria = 150 * dias_alugados;
      taxaKm = 0.3 * km_rodados;
      valorFinal = precoDiaria + taxaKm;
      return `<p>Carro Selecionado: <strong>${verificarSelecao()}</strong> </br> Dias: <strong>${dias_alugados}</strong> </br> Km: <strong>${km_rodados}</strong> </br> Valor Final: <strong>R$${valorFinal.toFixed(2)}</strong></p> `;
    } else {
      precoDiaria = 150 * dias_alugados;
      taxaKm = 0.25 * km_rodados;
      valorFinal = precoDiaria + taxaKm;
      return `<p>Carro Selecionado: <strong>${verificarSelecao()} </strong></br> Dias:<strong> ${dias_alugados}</strong> </br> Km: <strong>${km_rodados}</strong> </br> Valor Final: <strong>R$${valorFinal.toFixed(2)}</strong></p> `;
    }
  }

  res.innerHTML = Calculo();
});

reset_btn.addEventListener("click", () => {
  form.reset;
  res.innerHTML = "";
});
