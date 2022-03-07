/**
 * arguments
 * arguments que sustenta todos os argumentos enviados
 * Só funcionando com a declaração da "function" não funciona com arrow function
 * Todas os argumentos passado na função estarão disponiveis em arguments, 
 * mesmo declarando os parametros no escopo da função
 */

function funcao() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }

    console.log(total);
}
funcao(10, 20, 30, 40, 50);


/**
 * Quando não é passado um argumento para um parametro 
 * o javascript retorna undefined
 * resultado da funcão: "a undefined"
 */
function funcao2(a,b) {
    console.log(a, b);
}
funcao2('a');

/**
 * Quando tivermos parametros com valores setados
 * Para manter o valor padrão do parametro, é preciso definir o argumento
 * como undefined
 * No exemplo abaixo o parametro 'b' continua com o valor '2' 
 */
function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(2, undefined, 10);


/**
 * Parametros por atribuição via desestruturação (Objeto)
 */
function funcao4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Fernando', sobrenome: 'Soares', idade: 33 }
funcao4(obj)


/**
 * Parametros por atribuição via desestruturação (Array)
 */
 function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let arr = ['Fernando', 'Bruna', 'Laila'];
funcao5(arr);


/**
 * EXERCICIO
 * Rest Operator ... precisa ser o último parametro da função
 */
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 10, 10, 10, 20, 30);