/**
 * Exercicio 01
 * Escreva uma função que recebe 2 números e retorne o maior deles
 */

// Exemplo com Math.max
function maxNumber01(numero1, numero2) {
    return Math.max(numero1, numero2);
}

// Exemplo com if - else
function maxNumber02(numero1, numero2) {
    if( numero1 > numero2 ) {
        return numero1;
    } else {
        return numero2;
    }
}

// Exemplo com condiçao ternaria
function maxNumber03(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

// Exemplo com arrow function
const maxNumber04 = (numero1, numero2) => {
    return numero1 > numero2 ? numero1 : numero2;
}

// Exemplo com arrow function simplificado
const maxNumber05 = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2;


console.log( maxNumber01(200,199) );
console.log( maxNumber02(200,199) );
console.log( maxNumber03(200,199) );
console.log( maxNumber04(200,199) );
console.log( maxNumber05(200,199) );