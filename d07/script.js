function calcular (){
    let n1 = document.querySelector("#n1")
    let res = document.querySelector(".res")
    let dobro = Number(n1.value) * 2
    let terca = Number(n1.value) / 3
    res.style.color = "white"
    n1.focus()
    if(n1.value.length == 0) {
        alert("Preencha os dados corretamente")
    } else {
        res.innerHTML = `O dobro de ${n1.value} é ${dobro}</br> E a terça parte de ${n1.value} é ${terca.toFixed(2)}`
    }
}