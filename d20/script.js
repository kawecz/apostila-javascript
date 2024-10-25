function calcular(event) {
    event.preventDefault()
    
    const numero = document.querySelector("#numero").value
    const par_ou_impar = Number(numero) % 2
    const resp = document.querySelector(".res")

    if(par_ou_impar == 0) {
        resp.innerHTML = `<p>O número ${numero} é <strong>PAR</strong></p> `
        document.querySelector("strong").style.color = "green";
    } else {
        resp.innerHTML = `<p>O número ${numero} é <strong>ÍMPAR</strong></p>`
        document.querySelector("strong").style.color = "red";
    }
}