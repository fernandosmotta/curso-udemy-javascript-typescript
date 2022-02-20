/**
 * for...of
 * O loop for...of percorre objetos iterativos 
 * (incluindo Array, Map, Set, o objeto arguments e assim por diante), 
 * chamando uma função personalizada com instruções a serem executadas para o 
 * valor de cada objeto distinto.
 * A cada iteração, um valor de uma propriedade diferente é atribuido à variável.
 */

const name   = 'Fernando';
const fruits = ['banana', 'apple', 'orange', 'grape', 'mango'];

// Example 1 - Iterando sobre uma String
for ( let value1 of name ) {
    console.log(value1);
}

// separator
console.log("##########")

// Example 2 - Iterando sobre um Array
for( let value2 of fruits ) {
    console.log(value2)
}