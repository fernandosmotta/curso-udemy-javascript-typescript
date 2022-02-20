/**
 * MINHA SOLUCAO DESENVOLVIDA
 */


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar   = document.querySelector('.zerar');

let seconds = 3700;
let timer   = null;

iniciar.addEventListener('click', function(event) {
    relogio.style.color = '#000000';
    
    timer = setInterval(function(){
        seconds += 1;
        relogio.innerHTML = getTimer(seconds);
    }, 1000);
});

pausar.addEventListener('click', function() {
    clearInterval(timer);
    relogio.style.color = '#ff0000';
});

zerar.addEventListener('click', function() {
    seconds = 0;
    relogio.innerHTML = getTimer(seconds);
    relogio.style.color = '#000000';
});



function getTimer(seconds) {
    const hour = zeroEsquerda(Math.floor(seconds / 3600));
    const min  = zeroEsquerda(Math.floor(seconds / 60));
    const sec  = zeroEsquerda(seconds % 60);

    return `${hour}:${min}:${sec}`;
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}