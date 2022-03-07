/**
 * Exemplo de funções que retorna função
 */

// EXEMPLO 01
function fraseStart(inicio) {
    function fraseEnd(final) {
        return inicio + ' ' + final;
    }
    return fraseEnd;
}

const frase = fraseStart('Ola');
console.log( frase('mundo') );


// EXEMPLO 02
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
} 

const duplica     = criaMultiplicador(2);
const triplica    = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));