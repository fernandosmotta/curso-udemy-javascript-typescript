/**
 * https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval
 * 
 * setInterval()
 * Intervalo de tempo 
 * O método setInterval() oferecido das interfaces Window e Worker, repetem chamadas 
 * de funções ou executam trechos de código, com um tempo de espera fixo 
 * entre cada chamada.
 * 
 * clearInterval()
 * O método global clearInterval()cancela uma ação de repetição cronometrada 
 * que foi previamente estabelecida por uma chamada para setInterval().
 * 
 * setTimeout()
 * O método global setTimeout() define um cronômetro que executa uma função ou 
 * trecho de código especificado assim que o cronômetro expirar.
 */

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log( mostraHora() );
}

// EXEMPLO 01 - neste exemplo é chamado uma funcao criada 'funcaoDoInterval'
// executa cada 1 segundo
// setInterval( funcaoDoInterval, 1000 );

// EXEMPLO 02 - Neste exemplo é criado uma funcao anonima
// Executa cada 1 segundo
const timer = setInterval(function() {
    console.log( mostraHora() );
}, 1000);



// Para a funcao setInterval() após 5 seg
setTimeout(function(){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log("Contador parou a 5 segundos");
}, 10000);