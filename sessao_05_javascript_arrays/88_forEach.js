/**
 * forEach();
 * O método forEach() executa uma dada função em cada elemento de um array.
 * Parâmetros
 * (valor, indice, array)
 */

const a1 = [10, 20, 30];

a1.forEach((valor) => { console.log(valor) });

// Simulando o reduce
let total = 0;
a1.forEach((valor) => total += valor);
console.log(total);
