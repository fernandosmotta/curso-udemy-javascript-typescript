/**
 * IIFE -> Immediately invoked function expression
 * 
 * Função auto-invocada 
 * É uma função auto-invocada que você declara, mesmo como anônima, e que, no momento da declaração, você pode invocá-la. 
 * Tudo que for manipulado dentro da função somente atuará no escopo local da função, isolando-se do escopo global.
 */


/**
 * EXEMPLO DE FUNÇÃO ANÔNIMA AUTO-INVOCADA
 * É criado uma função anônima e já é executada
 */
(function(){
    const sobrenome = 'Miranda';

    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    // Result: Luiz Miranda
})();



/**
 * EXEMPLO DE FUNÇÃO ANÔNIMA AUTO-INVOCADA COM PARAMETROS
 * É criado uma função anônima que já executada
 */
(function(nome, idade, peso){
    console.log(nome, idade, peso)
})('Fernando', 33, 76);