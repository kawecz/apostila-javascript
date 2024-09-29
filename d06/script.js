function calcular (){
    let n1 = document.querySelector("#n1")
    let res = document.querySelector(".res")
    let suc = Number(n1.value) + 1
    let ant = Number(n1.value) - 1
    res.style.color = "white"

    if(n1.value.length == 0) {
        alert("Preencha os dados corretamente")
    } else {
        res.innerHTML = `O antecessor de ${n1.value} é ${ant}</br> E o sucessor de ${n1.value} é ${suc}`
    }
}