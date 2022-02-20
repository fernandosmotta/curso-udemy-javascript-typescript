/**
 * Escreva uma funçao que recebe um numero e retorne o seguinte:
 * Número é divisivel por 3 = Fizz
 * Número é divisivel por 5 = Buzz
 * Número é divisivel por 3 e 5 = FizzBuzz
 * Número NAO é duvisivel por 3 e 5 = Retorna o proprio Numero 
 * Checar se o número é realmente um número = Retorna o proprio Numero
 * Use a funcao com números de 0 a 100
 */

function gameFizzBuzz(numero = '') {
    let resultado =     '';

    if ( isNaN(numero) ) {
        return `${numero} não é um número válido!`;
    }

    if( (numero % 3 == 0) && (numero % 5 == 0) ) {
        resultado = 'FizzBuzz';
    }
    else if(numero % 3 == 0) {
        resultado = 'Fizz';
    }
    else if(numero % 5 == 0) {
        resultado = 'Buzz';
    }
    else {
        resultado = numero;
    }

    return resultado;
}


for(let i=0; i<=100; i++) {
    console.log(i, gameFizzBuzz(i) );
}


// Separador
console.log("###################")


/***
 * SOLUCAO EM AULA
 */

function fizzBuzz(numero) {
    if (typeof(numero) !== 'number') return numero;

    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';

    return numero;
}

for(let i=0; i<=100; i++) {
    console.log(i, fizzBuzz(i) );
}