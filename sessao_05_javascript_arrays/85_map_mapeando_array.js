/**
 * map() 
 * Altera valores do array, sempre vai retornar o mesmo tamanho do array original, porém com os valores alterados
 * ------------
 * O método map() invoca a função callback passada por argumento para cada elemento do Array e 
 * devolve um novo Array como resultado.
 * ------------
 * callback Recebe três argumentos: 
 * (valorAtual(element), indice, array)
 */


/**
 * EXEMPLO COM ARRAY
 * 01 - Sobre os núemros
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// EXEMPLO 01 - com função anonima
const numerosEmDobro01 = numeros.map(function(valor, indice, array){
    return valor * 2;
});
console.log(numerosEmDobro01);


// EXEMPLO 02 - Arrow Function
const numerosEmDobro02 = numeros.map((valor, indice, array) => {
    return valor * 2;
});
console.log(numerosEmDobro02);



// EXEMPLO 03 - Arrow Function (Mais simplifica utilizada quando for uma unica linha)
const numerosEmDobro03 = numeros.map( valor => valor * 2 );
console.log(numerosEmDobro03);




/**
 * EXEMPLO COM OBJETO
 * Para cada elemento:
 * 01 - Retorne apenas uma string com o nome da pessoa
 * 02 - Remova apenas a chave "nome" do objeto
 * 03 - Adicione uma chave id em cada objeto
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map((obj) => {
    return obj.nome;
});
console.log(nomes);

const idades01 = pessoas.map((obj) => {
    delete obj.nome;
    return obj;
});
const idades02 = pessoas.map(obj => ({idade: obj.idade}));

console.log(idades01);
console.log(idades02);


const comIds = pessoas.map((obj, indice) => {
    obj.id = (indice + 1) * 1000;
    return obj;
});
console.log(comIds);

// Criando um novo objeto
const comIdsNew = pessoas.map((obj, indice) => {
    newObj = {...obj}
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(comIdsNew);