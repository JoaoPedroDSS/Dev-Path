var lista = []
 //primeiro botão, serve para adicionar os valores ao array, todo valor novo é o primeiro no array e é colocado dentro das options no texto das mesmas
function analisa() {
    var numero = window.document.getElementById("aqui")
    var num = Number(numero.value)
    var analisador = window.document.getElementById("Analisador")
    var item = window.document.createElement('option')
    //essa verificação serve para ver se o número está dentro da lista
    function inlista(n,l) {
        if (l.indexOf(n) != -1){
            return true
        } else {return false}
    }
    if (inlista(num,lista) == true){
        window.alert("Número já adicionado")
    }
    //if que testa se o input está sucetivel a entrar na lista 
    if (num>=1 && num<=100 && inlista(num,lista) == false ){
        item.text = ` valor ${num} adicionado`
        analisador.appendChild(item) 
        lista.push(+num)
        console.log(lista);
    } 
    //alerta de erro caso dê errado
    else {
        window.alert("Entrada inválida, por favor tente novamente")
    }
}
 //segundo botão serve para fazer a operação dos os valores colocados, dando maior, menor, soma e média
function finalizar() {
    console.log(lista);
    var soma = 0
    var maior = 0
    menor = 100
   
    var retorno = window.document.getElementById("retorno")
    retorno.innerHTML = `A quantidade de números digitada foi ${lista.length}\n`
   
    for (pos = 0 ; pos < lista.length ; pos ++ ){
        soma += Number(lista[pos]) 
        if (maior<[lista[pos]]){
            maior = lista[pos]
        }if ( menor > lista[pos] ){
            menor=lista[pos]
        }

    }
     //testes condicionais lógicos e validações
    retorno.innerHTML += `<p> A Soma dos valores é de ${soma}<\p>`
    retorno.innerHTML += ` <p> O Maior dos valores é ${maior} <\p>`
    retorno.innerHTML += ` <p>O Menor dos valores é ${menor} <\p>`
    retorno.innerHTML += ` <p>A Média dos valores é ${soma/lista.length} <\p>`
}