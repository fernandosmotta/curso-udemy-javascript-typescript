/**
 * Documentaçao
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 * A sintaxe de atribuição via desestruturação (destructuring assignment) 
 * é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos 
 * em variáveis distintas.
 */

const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Soares',
    idade: 33,
    cpf: '362.074.828-40',
    contato: {
        telefone: '3445-5523',
        celular: '99124-6868',
        email: 'fernando.smotta@gmail.com'
    }
}

/**
 * Desestruturação de objeto (Atribuição Básica)
 */
const { nome, idade } = pessoa;
console.log(nome, idade) // Fernando 33

/**
 * Atribuição para variáveis com novos nomes
 * Uma variável pode ser extraída de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto.
 */
const { nome: name, sobrenome: lastName } = pessoa
console.log(name, lastName); // Fernando Soares

/**
 * Valores padrão
 * Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do objeto é undefined.
 * No exemplo abaixo, a chave `rg` nao existe no nosso objeto e portando recebe um valor default
 */
const { cpf = '999.999.999-99', rg = '99.999.999-X' } = pessoa;
console.log(cpf, rg) // 362.074.828-40 99.999.999-X

/**
 * Objetos aninhado
 */
// Obtem o objeto `contato` aninhado dentro do objeto principal `pessoa`
const { contato } = pessoa;
console.log( contato );

//desestrutura o objeto aninhado `contato` extraindo em variavel
const { contato: {celular, email} } = pessoa;
console.log(celular, email) // 99124-6868 fernando.smotta@gmail.com


/***
 * Obtem o resto do objeto
 */
const { nome: n, sobrenome: s, ...resto } = pessoa
console.log( n, s );
console.log( resto );