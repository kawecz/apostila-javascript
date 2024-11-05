function calc(event) {
    event.preventDefault()

    const n1 = Number(document.querySelector("#n1").value)
    const n2 = Number(document.querySelector("#n2").value)
    const res = document.querySelector(".res")

    if(n1 > n2) {
        res.innerHTML = ''
        res.innerHTML += `O primeiro valor é maior.`
    } else {
          res.innerHTML = ''
        res.innerHTML = `O segundo valor é maior.`
    } if (n1 == n2) {
          res.innerHTML = ''
        res.innerHTML = `Não existe valor maior, os dois são iguais.`
    }
}