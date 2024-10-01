function calcular () {
    let metros = document.querySelector("#metros")
    let res = document.querySelector(".res")

    let km = Number(metros.value) / 1000
    let hm = Number(metros.value) / 100
    let dam = Number(metros.value) / 10
    let dm = Number(metros.value) * 10
    let cm = Number(metros.value) * 100
    let mm = Number(metros.value) * 1000

    if(metros.value.length == 0) {
        alert("Preencha os dados corretamente!")
    } else {
        metros.focus()
        res.innerHTML = `<h1> A distância de ${metros.value} metros(m) convertendo para as demais unidades de medidas:</h1>`
        res.innerHTML += `${km}<strong>(km)</strong></br>`
        res.innerHTML += `${hm}<strong>(hm)</strong></br>`
        res.innerHTML += `${dam}<strong>(dam)</strong></br>`
        res.innerHTML += `${dm}<strong>(dm)</strong></br>`
        res.innerHTML += `${cm.toFixed(1)}<strong>(cm)</strong></br>`
        res.innerHTML += `${mm.toFixed(1)}<strong>(mm)</strong>`

    }
}