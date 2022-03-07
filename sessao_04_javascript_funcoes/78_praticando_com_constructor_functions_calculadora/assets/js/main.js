/**
 * Criando um Calculadora com  Constructor Functions (Funções Construtoras)
 */


function Calculadora() {
  const display = document.querySelector('.display');

  this.inicia = function() {
    cliqueBotoes();
    pressionaEnter();
  };

  
  pressionaEnter = function() {
    display.addEventListener('keyup', function(e) {
      if(e.keyCode === 13) {
        realizaConta();
      }
    });
  };

  clearDisplay = function() {
    display.value = "";
  };

  deleteOne = function() {
    display.value = display.value.slice(0, -1);
  };

  realizaConta = function() {
    let conta = display.value;

    try {
      conta = eval(conta);

      if(!conta) {
        display.value = String(conta);
        setTimeout(function(){
          clearDisplay();
        }, 3000);
        return;
      }

      display.value = String(conta);
    } catch(e) {
      display.value = 'NaN';
      setTimeout(()=>{
        clearDisplay();
      }, 3000);
      return;
    }
  };

  mostrarNoDisplay = function(valor) {
    display.value += valor;
  };

  cliqueBotoes = function() {
    document.addEventListener('click', function(e) {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        mostrarNoDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        deleteOne();
      }

      if (el.classList.contains('btn-eq')) {
        realizaConta();
      }
    });
  };

}


const calculadora = new Calculadora();
calculadora.inicia();