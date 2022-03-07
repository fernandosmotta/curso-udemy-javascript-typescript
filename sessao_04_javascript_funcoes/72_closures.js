/**
 * Closures
 * Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 * Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada 
 * fora de seu escopo léxico.
 * Closure é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes.
 * closure é a habilidade da função acessar o seu escopo lexico, pode acessar o escopo da função pai, do escopo global
 */


function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}


const funcao = retornaFuncao();

console.log( funcao() ); //closure, acessou o escopo da função pai "retornaFuncao()" e obteve o valor da variavel 'nome'

