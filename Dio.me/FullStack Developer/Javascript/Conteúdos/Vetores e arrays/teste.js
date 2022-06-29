//como se declara um array
let array = ['string', 1, true];
console.log(array);

//foreach serve como o for i in 
array.forEach(function(item, index){console.log(item,index)});

//array push adiciona ao final do array
array.push('sim', 14);
console.log(array);

//array pop apaga o ultimo item do array
array.pop();
console.log(array);

//array shift apaga o primeiro item do array 
array.shift();
console.log(array);

//array unshift adiciona um item ao inicio do array

//array indexOf diz o indice do elemento
console.log(array.indexOf(true));

//array splice, remove ou substitui item desejado pelo indice
array.splice();
console.log(array);

//array slice eu tô ligado

//OBJETOS
let object = { string: 'sim', number: 1, boolean: true, array:[]};
console.log(object);