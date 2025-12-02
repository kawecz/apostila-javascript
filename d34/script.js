const form = document.querySelector("form");
const res = document.querySelector(".res");
const btn_rest = document.querySelector(".reset");




//FORMULARIO

form.addEventListener("submit", (e) => {
  e.preventDefault();
  res.classList.add("act");
  const altura = Number(document.querySelector("#altura").value);
  const peso = Number(document.querySelector("#peso").value);

  // calculo
  const imc = peso / (altura * altura);
  //fim calculo

  if (altura > 220) {
    alert("Coloque uma altura viável, seu anão!");
  } else {
    res.innerHTML = `<p>Altura: ${altura.toFixed(2)}cm</p>`;
    res.innerHTML += `<p>Peso: ${peso}kg</p>`;
    res.innerHTML += `<p>IMC: ${imc.toFixed(2)}</p>`;
    if(imc < 18.5) {
        res.innerHTML += `<h4>Abaixo do Peso</h4>`
    } else if( imc < 25) {
        res.innerHTML += `<h4>Peso Ideal</h4>`
    } else if(imc < 30) {
        res.innerHTML += `<h4>Sobrepeso</h4>`
    } else {
        res.innerHTML += `<h4>Obesidade Mórbida</h4>`
    }
  }
});

//FIM FORMULARIO

//RESETAR FORMULARIO
btn_rest.addEventListener("click", () => {
  form.reset();
  res.classList.remove("act");
});

//FIM RESET

// Adicionando imagem
const titulo = document.querySelector(".titulo");
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/256/10476/10476452.png"
);
titulo.appendChild(img);

//fim

