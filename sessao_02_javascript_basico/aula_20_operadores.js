/**
 * TIPOS DE DADOS PRIMITIVOS
 * string, number, boolean, undefined, null
 */


/**
 * OPERADORES ARITMÉTICOS, DE ATRIBUIÇÃO E INCREMENTO
 */

/**
 * ARITMÉTICOS
 * +  (adição, concatenação) 
 *  * - (subtração) 
 * / (divisão) 
 * * (multiplicação)
 * 
 * ** (potenciação)
 * %  (resto da divisao)
 * -------------------------------------------------
 * PRECEDENCIA PARA CALCULO FORMULA MATEMATICA
 * -------------------------------------------------
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + - 
 */
const num1 = 10
const num2 = 3
const num3 = '20' //string

console.log( num1 + num2 ) // 13 - adiçao
console.log( num1 + num3 ) // 1020 - concatenaçao

console.log( num1 ** num2 ) // 1000 potenciaçao
console.log( num1 % num2 )  // 1 resto da divisão 


/**
 * INCREMENTO
 * ++ (incremento)
 * -- (decremento)
 */
let contador = 1;
contador++
// incremento
console.log(`contador`, contador++) //pós incremento (primeiro exibe o valor e depois incrementa o valor)
console.log(`contador`, ++contador) //pré incremento (primeiro incrementa o valor e depois exibe na tela)
// decremento
console.log(`contador`, --contador)


/**
 * ATRIBUIÇAO
 * += (incremento adição)
 * -= (decremento subtração)
 * *= (incremento multiplicacao)
 * /= (decremento divisao)
 * **= (incremento potencializacao)
 */
contador = 1;

contador += 10
console.log(`incremento`, contador)

contador -= 10
console.log(`decremento`, contador)

contador *= 50
console.log(`multi`, contador)


/**
 * CONVERSAO DE TIPO
 */
let num1 = 10

let c1 = parseInt(num1)   // Converte para Numeros Inteiros
let c2 = parseFloat(num1) //Converte para Numeros com Ponto flutuante
let c3 = Number(num1)     // Realizar a conversao, seja numero inteiro ou float