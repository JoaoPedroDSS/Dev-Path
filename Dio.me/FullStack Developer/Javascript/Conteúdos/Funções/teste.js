/*function printar() {
    console.log('Deu certo');
}
printar()
*/

//expressões de funções
function calculadora() {
    const operação = prompt("Escolha a operação: \n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)")


    let n1 = Number(prompt('Insira o primeiro número:'));
    let n2 = Number(prompt('Insira o segundo número:'));
    let resultado
    function Soma(){
        resultado= n1+n2
        alert(`${n1}+${n2}=${resultado}`)
    }
    function Subtração(){
        resultado= n1-n2
        alert(`${n1}-${n2}= ${resultado}`)
    }
    function Multiplicação(){
        resultado= n1*n2
        alert(`${n1} X ${n2} = ${resultado}`)
    }
    if (operação == 1){
        Soma();
    } else if (operação == 2){
        Subtração();
    } else if (operação == 3){
        Multiplicação();
    } else if (operação == 4){
        divisaoReal();
    } else if (operação == 5){
        divisaoInteira();
    } else if (operação == 6){
        pontenciação();
    }
}
calculadora();