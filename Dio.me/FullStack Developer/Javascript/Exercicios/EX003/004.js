function numeros(n1, n2) {
  /*  if (n1 == n2){
    console.log(`Os valores ${n1} e ${n2} são iguais`);
    }    else if(n1!=n2){
    console.log(`Os valores ${n1} e ${n2} NÃO são iguais`);
    }
  */
    const iguais = n1==n2;
    return iguais ? "São iguais" : "não são iguais";

    var soma = n1+n2
    console.log(`A soma de ${n1} e ${n2} é ${soma}`);
    if (soma>10){
        console.log(`${soma} é maior que 10`);
    }
    else if(soma<10){
        console.log(`${soma} é menor que 10`);
    }
    if (soma>20){
        console.log(`${soma} é maior que 20`);
    }
    else if (soma<20){
        console.log(`${soma} é menor que 20`);
    }
}

/*
faça uma função que receba 2 numeros, compare se os números são iguais, some os 2 e diga se são maiores e ou menores que 20 e 10
const iguais = n1==n2
return iguais ? "São iguais" : "não são iguais"
*/