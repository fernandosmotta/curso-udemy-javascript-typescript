/**
 * Criando um Calculadora com  Factory Functions
 * Explicação:
 * 
 * ------------------------------------------------------------------------------------
 * O "this" dentro do "document.addEventListener" é o document e não a 'calculadora'
 * Isso acontece pq é o document que está chamando a função 
 * Para mudar o comportamento do this, basta inserir método "bind(this)" no fora da
 * funcao "document.addEventListener", (O this passa ser a calculadora novamente) 
 * EXEMPLO CODE ABAIXO:
 * ------------------------------------------------------------------------------------
 * cliqueBotoes: function() {
 *    document.addEventListener('click', function(e) {
 *        const el = e.target;
 *        if(el.classList.contains('btn-num')) {
 *            this.btnParaDisplay(el.innerText);
 *        }
 *    }.bind(this));
 * }
 * 
 * ------------------------------------------------------------------------------------
 * "ARROW FUNCTION" não permite alteração do "this"
 * Ele deixa o "this" travado em quem criou o elemento (neste exemplo a 'calculadora')
 * No Exemplo abaixo, mesmo o "document" chamando o metodo "btnParaDisplay" o "this" 
 * ainda será a function pai neste caso "calculadora"
 * EXEMPLO CODE ABAIXO COM ARROW FUNCTION:
 * ------------------------------------------------------------------------------------
 * document.addEventListener('click', (e) => {
 *    this.btnParaDisplay(el.innerText);
 * })
 */




function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    
    inicia: function() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter: function() {
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay: function() {
      this.display.value = '';
    },

    deleteOne: function() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta: function() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        
        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    btnParaDisplay: function(valor) {
      this.display.value += valor;
    },

    cliqueBotoes: function() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },
  };
}


const calculadora = criaCalculadora();
calculadora.inicia();