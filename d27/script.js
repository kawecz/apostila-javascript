function media(event) {
    event.preventDefault()

    const n1 = Number (document.querySelector("#n1").value)
    const n2 = Number (document.querySelector("#n2").value)
    const media = (n1 + n2) / 2
    const res = document.querySelector(".res")
    const formulario = document.querySelector("#form")
    formulario.addEventListener('submit', () => {
        res.style.display = 'block';
    });
    if (media >= 7) {
        res.innerHTML = ''
        res.style.color = 'green'
        res.innerHTML += `<p>APROVADO</p>`
    } else if (media >= 5 && media < 6.9){
        res.innerHTML = ''
        res.style.color = 'yellow'
        res.innerHTML += `<p>RECUPERAÇÃO</p>`
    } else {
        res.innerHTML = ''
        res.style.color = 'red'
        res.innerHTML += `<p>REPROVADO</p>`
    }
}