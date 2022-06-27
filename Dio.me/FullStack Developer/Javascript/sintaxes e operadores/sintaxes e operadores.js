/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/


function comparanum(num1,num2){
    const saoiguais = num1 === num2;
    const soma = num1 + num2;
//if ternário
    if(saoiguais){
        return "São iguais";
    }
    return "Não são iguais";
}