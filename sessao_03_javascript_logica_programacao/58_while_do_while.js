/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while
 */

/** **********************************
 * while
 * A declaração while cria um laço que executa uma rotina especifica enquanto a 
 * condição de teste for avaliada como verdadeira. A condição é avaliada antes da 
 * execução da rotina.
 */
let nome = 'Samara';
let cont = 0;
while( cont < nome.length ) {
    console.log(nome[cont]);
    cont++;
}

/** **********************************
 * do...while
 * A declaração do...while cria um laço que executa uma declaração até que o teste 
 * da condição for falsa (false). A condição é avaliada depois que o bloco de código 
 * é executado, resultando que uma declaração seja executada pelo menos uma vez.
 */

let i = 0;
let paginacao = '';

do {
    i++;
    paginacao = `${paginacao} ${i} |`;
} while( i < 5 );

console.log(paginacao)



/** **********************************
 * EXERCICIO
 * Gerador números da mega Sena
 */

function randon(min, max) {
    let number = Math.random() * (max - min) + min;
    number = Math.floor(number);
    return number;
}

let resultado = '';
let contador  = 1;

do {
    if ( contador === 1 ) {
        resultado = `${resultado} ${randon(1, 60)}`;
    } else {
        resultado = `${resultado} - ${randon(1, 60)}`;  
    }
    contador++;
} while( contador <= 6 );

console.log(resultado);