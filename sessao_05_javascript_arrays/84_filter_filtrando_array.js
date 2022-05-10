/**
 * filter 
 * Filter Sempre vai retornar um array, com a mesma quantidade de elmentos ou menos 
 * ------------
 * O método filter() cria um novo array com todos os elementos que passaram no teste 
 * implementado pela função fornecida.
 * ------------
 * callback
 * Função é um predicado, para testar cada elemento do array. 
 * Retorna true para manter o elemento, false caso contrário, recebendo três argumentos: (valorAtual(element), indice, array)
 */


/**
 * EXEMPLO COM ARRAY
 * 01 - Retorne os números maiores que 10
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// EXEMPLO 01 - com função anonima
const numerosFiltrados01 = numeros.filter(function(valor, index, array) {
    if(valor > 10) {
        return true;
    } else {
        return false;
    }
});
console.log(numerosFiltrados01);


// EXEMPLO 02 - Array Function
const numerosFiltrados02 = numeros.filter( (valor, index, array) => {
    return (valor > 10);
});
console.log(numerosFiltrados02);



// EXEMPLO 03 - Array Function (Mais simplifica utilizada quando for uma unica linha)
const numerosFiltrados03 = numeros.filter( valor => valor > 10 );
console.log(numerosFiltrados03);




/**
 * EXEMPLO COM OBJETO
 * 01 - Retorne as pessoas que tem o nome com 5 letras ou mais
 * 02 - Retorne as pessoas com mais de 50 anos
 * 03 - Retorne as pessoas cujo nome termina com a
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length > 5 );
console.log( pessoasComNomeGrande );

const pessoasIdade =  pessoas.filter( obj => obj.idade > 50 );
console.log( pessoasIdade );

const pessoasNomeTerminaComA = pessoas.filter( obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log( pessoasNomeTerminaComA );