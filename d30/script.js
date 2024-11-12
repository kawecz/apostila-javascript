function calc(event) {
    event.preventDefault()

    const v1 = Number(document.querySelector("#seg1").value)
    const v2 = Number(document.querySelector("#seg2").value)
    const v3 = Number(document.querySelector("#seg3").value)
    const res = document.querySelector(".res")



    if(v1 < v2 + v3 && v2 < v1 + v3 && v3 < v1 + v2 ) {
        res.innerHTML = ''
        res.innerHTML += `<p> Os valores ${v1}, ${v2} e ${v3} podem formar um triângulo.</p>`
        res.style.color = 'green'
    } else {
        res.innerHTML = ''
        res.innerHTML += `Os valores ${v1}, ${v2} e ${v3} não podem formar um triângulo.`
        res.style.color = 'red'

    } if (v1 == v2 && v1 == v3) {
        res.innerHTML = ''
        res.innerHTML += `<p>Tipo de Triângulo: <strong>EQUILÁTERO</strong></p>`
    } else if(v1 == v2 && v1 !=v3 || v1 == v3 && v1 !=v2 || v2 == v3 && v2 != v1) {
         res.innerHTML += `<p>Tipo de Triângulo:  <strong>ISÓSCELES</strong></p>`
    } else if(v1 != v2 && v1 != v3) {
        res.innerHTML = ''
        res.innerHTML += `<p>Tipo de Triângulo: <strong>ESCALENO</strong></p>`
    }
}