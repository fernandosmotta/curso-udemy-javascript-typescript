/**
 * ATENÇAO 
 * Nao criar variavel sem as palavras reservadas (const, let)
 * Sempre que for criar uma variavel, utilizar (const, let), nunca (var)Obsoleto
 */

/**
 * Sempre utilizar let para criar variaveis dentro do JavaScript
 * Let nao deixa re-declarar uma variavel 
 */
let nome = 'Fernando'
//let nome = 'Bruna'
console.log(nome)


/**
 * var está obsoleto
 * Um dos motivos que é possivel re-declarar a mesma variavel
 * Podendo causar erro de execuçao 
 */
var nomeCarro = 'Gol'
var nomeCarro = 'Peugeout'
console.log(nomeCarro)