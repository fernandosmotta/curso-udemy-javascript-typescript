/**
 * SOLUCAO REALIZADA EM AULA
 */

function relogio() {
    const relogio = document.querySelector('.relogio');

    let segundos = 0;
    let timer;

/*
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar   = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function() {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function() {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});
*/


    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
    });

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
}

relogio();