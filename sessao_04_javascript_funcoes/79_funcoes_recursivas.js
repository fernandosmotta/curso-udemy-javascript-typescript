/**
 * Funções Recursivas
 * Uma função é dita recursiva quando dentro dela é feita uma ou mais chamadas a ela mesma. 
 */

function recursiva(max) {
    console.log(max);
    if(max >= 100) return;
    max++;
    recursiva(max);
}

recursiva(0);