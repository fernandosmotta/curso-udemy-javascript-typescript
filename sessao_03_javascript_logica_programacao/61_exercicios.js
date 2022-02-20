/**
 * Escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura
 * de uma imagem (number). 
 * Retorne  true se a imagem estiver no modo paisagem
 */

function ePaisagem01(largura, altura) {
    if (largura > altura) {
        return true;
    }
    return false;
}

function ePaisagem02(largura, altura) {
    return (largura > altura) ? true : false;
}

// Exemplos com arrow function (completo e simplificado)
const ePaisagem03 = (largura, altura) => { return largura > altura ? true : false };
const ePaisagem04 = (largura, altura) => largura > altura ? true : false;


console.log( ePaisagem01(600, 300) );
console.log( ePaisagem02(600, 300) );
console.log( ePaisagem03(600, 300) );
console.log( ePaisagem04(600, 300) );