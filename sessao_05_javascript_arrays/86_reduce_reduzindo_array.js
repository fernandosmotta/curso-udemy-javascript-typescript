/**
 * reduce() 
 * A Principal função é reduzir um array a um unico elemento
 * ------------
 * O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
 * ------------
 * callback Recebe quatro argumentos: 
 * (acumulador, valorAtual(element), indice, array)
 */


/**
 * EXEMPLO COM ARRAY
 * 01 - Some todos os números (reduce)
 * 02 - Retorne um array com os pares (Exemplo filter)
 * 03 - Retorne um array com o dobro dos valores (Exemplo Map)
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os números (reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    return acumulador + valor;
}, 0); //valor inicial do acumulador
console.log(total);

//Retorne um array com os pares (Exemplo filter)
const pares = numeros.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []) //valor inicial do acumulador
console.log(pares);

//Retorne um array com o dobro dos valores (Exemplo Map)
const dobro = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push( valor * 2 );
    return acumulador;
}, []); 
console.log(dobro);






/**
 * EXEMPLO COM OBJETO
 * Para cada elemento:
 * 01 - 
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const maiorIdade = pessoas.reduce((acumulador, obj) => {
    if(  acumulador.idade > obj.idade ) return acumulador;
    return obj;
});
console.log(maiorIdade);
