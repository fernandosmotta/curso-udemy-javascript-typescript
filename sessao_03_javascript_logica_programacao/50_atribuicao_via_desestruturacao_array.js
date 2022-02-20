/**
 * Documentaçao
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 * A sintaxe de atribuição via desestruturação (destructuring assignment) 
 * é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos 
 * em variáveis distintas.
 */


// Trocando variáveis
// Os valores de duas variáveis podem ser trocados em uma expressão de desestruturação.
let a = 'A';
let b = 'B';
let c = 'C';

[a, c, b] = [b, c, a];
console.log(a, b, c);



const frutas = ['banana', 'maça', 'laranja', 'pera', 'uva', 'manga'];

// EXEMPLO 01
let [fruta01, fruta02] = frutas;
console.log(fruta01, fruta02) // banana maça


// EXEMPLO 02
// ... rest operator (pega o resto de um array)
// ... spread operator (espalha)
// Atribuindo o resto de um array para uma variável
// Ao desestruturar um array, você pode atribuir a parte restante deste em uma 
// viáriável usando o padrão rest: ...rest
let [fruta001, fruta002, fruta003, ...resto] = frutas;
console.log(fruta001, fruta002, fruta003); // banana maça laranja
console.log(resto); // [ 'pera', 'uva', 'manga' ]


// EXEMPLO 03
// Ignorando alguns valores retornados
// Você pode ignorar valores retornados que você não tem interesse:
const numeros = [1000, 2000, 3000, 4000, 5000, 6000];

let [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco); // 1000 3000 5000


// EXEMPLO 04 
// Exemplo com matriz
const mercado = [
    ['feijao', 'arroz', 'trigo'],
    ['leite', 'pao', 'café'],
    ['carne', 'peixe', 'aves']
]

let [ [, item1], [item2], [, , item3] ] = mercado;
console.log(item1, item2, item3); // arroz leite aves


