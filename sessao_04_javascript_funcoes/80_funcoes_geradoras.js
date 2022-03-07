/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
 * 
 * Funções Geradoras
 * Geradores são funções cuja execução pode ser interrompida e posteriormente reconduzida. 
 * Seus contextos (de associações de variáveis) ficarão salvos entre cada recondução.
 * function*
 * A declaração "function*"" (palavra chave function seguida de um asterisco) define uma função geradora (generator function), 
 * que retorna um objeto Generator.
 *  yield
 * especifica o valor a ser devolvido do iterator
 */

function* geradora1() {
    yield 'valor 01';
    yield 'valor 02';
    yield 'valor 03';
}

const g1 = geradora1();
console.log( g1.next().value );
console.log( g1.next() );
console.log( g1.next() );




function* geradora2() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const g2 = geradora2();
console.log( g2.next().value );
console.log( g2.next().value );
console.log( g2.next().value );
console.log( g2.next().value );
console.log( g2.next().value );
console.log( g2.next().value + '\n' );



function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}



function* geradora5() {
    yield function() {
        console.log("Vim do y1");
    }

    // O return vai fazer com que a função geradora termine (Nada mais para baixo será executado)
    return function() {
        console.log("Vim do return");
    }

    yield function() {
        console.log("Vim do y2");
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
// func3(); // retornara um erro, pois a função geradora parou no "return"