function contar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] preencha todas as caixas')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0 ){
            window.alert('Passo inválido, considerando 1')
            p=1
        }
        //contagem progressiva
        if (i<f){
            for(let c = i; c<=f; c+=p ){
                res.innerHTML += ` ${c}  \u{1F449}`
                //essa contra barra u serve para colocar o emoji
            }
            //contagem regressiva
        }else{
            for(let c = i; c>=f ; c-=p ){
                res.innerHTML += `${c} \u{1F449}`
        }
            }  
        res.innerHTML += '\u{1F6A9}'
    }
    
}