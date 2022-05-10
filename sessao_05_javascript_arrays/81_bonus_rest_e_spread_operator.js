/**
 * Rest e o Spread Operator
 * https://www.horadecodar.com.br/2019/03/19/como-funcionam-o-rest-e-o-spread-operator/
 */



/** ----------------------------------------------------------------------------------------------------------
 * Spread Operator
 * Spread = espalhar
 * transforma um array em diversos parâmetros para uma função
 * podemos invocar uma função que espera vários parâmetros utilizando o Spread
 * Separa um array em vários parâmetros de uma função ou na construção de um array
 * Spread vai espalhar os parâmetros passados pelo …argumento em uma chamada de função ou um array
 */

// Spread
// Chamamos uma função que requer três argumentos pelo Spread, que tratou de organizar eles e assim a função retornou o resultado
function somarElementos(a, b, c) {
    console.log(a + b + c);
}

let elementos = [1,5,14]; 
somarElementos(...elementos); // 20


// inserimos com Spread alguns itens a um array
let itensDaLista = ['trigo', 'batata'];
let listaDeCompras = ['banana', ...itensDaLista, 'arroz', 'maçã', 'chocolate'];
console.log(listaDeCompras); // (6) ["banana", "trigo", "batata", "arroz", "maçã", "chocolate"]


// Outra possibilidade de uso é concatenar arrays
let arrA = [1,2,3];
let arrB = [4,5,6];
let arrC = [...arrA, ...arrB];
console.log(arrC); // (6) [1, 2, 3, 4, 5, 6]



/** ----------------------------------------------------------------------------------------------------------
 * Rest Operator
 * Rest = condensar
 * nos permite transformar um número indeterminado de parâmetros em um array
 * Junte todos os parâmetros restantes, ou seja os que ficarem par …algumNome, em um array
 * Rest vai reunir todos os parâmetros passados para uma função em um array
 */ 

// Rest
function testandoRest(a, b, ...theArgs) {
    console.log(a, b, theArgs); // 1, 2, [3,4,5]
}
testandoRest(1, 2, 3, 4, 5);


function testandoRest2(...theArgs) {
    console.log(theArgs); // [1,2,3,4,5]
}
testandoRest2(1, 2, 3, 4, 5);