/**
 * Escopo Léxixo nada mais é que o escopo do código
 * O escopo léxico define o escopo em termos da estrutura léxica do programa. 
 * Com escopo léxico, um nome sempre se refere ao seu ambiente léxico (mais ou menos) local. 
 * Esta é uma propriedade do texto do programa e é feita independente da pilha de chamadas em tempo de execução pela implementação da linguagem.
 * Explicação:
 * O escopo léxico é baseado nas variáveis e blocos de escopo definidos, por você, em tempo de escrita do código. 
 * Logo, ele é definido em tempo de compilação
 * Assim como blocos e funções podem ser inseridos dentro de outros blocos ou funções, o mesmo vale para escopos. 
 * Se uma variável não pôde ser encontrada no escopo imediato, a engine irá procurar por ela no escopo externo mais próximo. 
 * Essa busca irá continuar até que o escopo global seja alcançado. Se a variável não estiver no escopo global, 
 * um erro será emitido
 */

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome();

/**
 * RESULT: Luiz
 * Funções podem acessar variaveis de fora delas
 * Então Quando chamamos o função "falaNome" o escopo lexico da varialvel "nome" já tinha sido definado na linha 7 como 'Luiz'
 * Quando executamos a função "usaFalaNome" e chamado internamente a função "falaNome" que exibe o nome, mas não é "Otávio", porque
 * essa variavel é interna da função "usaFalaNome" e a como não foi definado uma variavel interna 'nome' para a função "falanome"
 * O motor do javascript buscou essa informação no escopo global.
 */