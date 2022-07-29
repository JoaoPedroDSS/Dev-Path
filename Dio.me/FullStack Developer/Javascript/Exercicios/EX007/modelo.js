function criar() {
    var numero = window.document.getElementById("aqui")
    var tabuada = window.document.getElementById("tabuada")

    if (numero.value.length == 0 ){
        window.alert('Por favor, digite um número!')
    } else{
        var num = Number(numero.value)
        c=2
        tabuada.innerHTML= ''
        while (c<10){
            var item = window.document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}