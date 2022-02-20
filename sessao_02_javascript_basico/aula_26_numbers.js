let num1 = 100;
let num2 = 2.5;
let num3 = 50.4573737723782323;

//O método toString() retorna uma string (converte numero para string)
console.log( num1.toString() + num2.toString() ) //result: "12.5"

//O método toString(2) converte a string em binário
console.log(num1.toString(2)) //result: "1100100"

// O método toFixed() formata um número utilizando notação de ponto fixo.
// limita após a virgula
console.log( num3.toFixed(2) ) //result: "50.46"

// O metodo isInteger() verifica se o numero é inteiro
console.log(Number.isInteger(num1)) //result: "true"

//O metodo isNaN() verifica se a variavel é NaN(Not a Number)
let temp = 100 * 'ola'
console.log(Number.isNaN(temp)) //result: "true"

num1 = 0.7
num2 = 0.1

num1 += num2;
num1 += num2;
num1 += num2;

console.log( num1 ); //Impreciçao de calculos no javascript (numero menor que 1)
console.log( parseFloat(num1.toFixed(2)) ); //Soluçao 01
console.log( Number(num1.toFixed(2)) )      //Soluçao 02