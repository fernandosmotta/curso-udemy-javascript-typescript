/**
 * Valores Primitivos (imutáveis)
 * Um valor primitivo é um dado que nao é representado através de um objeto e por 
 * consequencia nao possui metodos
 * Valores imutaveis sao objetos cujo estado nao podem ser mudados uma vez criado
 * Valores primitivos sao copiados quando é utilizado o sinal (=)
 * (string, number, boolean, undefined, null, bigint, symbol)
 */

let a = 'A';
let b = a; //valor foi copiado da variavel a
console.log(a,b);

a = 'C'; //Alterando o valor da variavel a
console.log(a,b);

/**
 * Referência (mutável)
 * Um objeto mutavel é um objeto cujo estado pode ser modificado após a criacao
 * Valores passado por referencia quando utilizado o sinal (=), 
 * pois apontam para o mesmo local(espaço) na memoria
 */

//EXEMPLO ARRAY
let arr_01 = [1,2,3];
let arr_02 = arr_01; //Passado por referencia da variavel arr_01

console.log(arr_01, arr_02);

arr_02.push(4);
console.log(arr_01, arr_02); 
//Como apontam para o mesmo espaco na memoria, 
//tanto a variavel arr_01 e arr_02 sofrem a alteracao


//EXEMPLO OBJECT
let ob_01 = {nome: "Fernando", sobrenome: "Soares"};
let ob_02 = ob_01;

console.log(ob_01, ob_02);

ob_02.sobrenome = "Mota";
console.log(ob_01, ob_02);
//Como apontam para o mesmo espaco na memoria, 
//tanto a variavel ob_01 e ob_02 sofrem a alteracao


/**
 * ATENCAO
 * Caso queira copiar o valor do array ou objeto, ao inves do passar copo referencia
 * é preciso fazer dessa forma
 */
let arr_copy = [...arr_01]; //copiado do array arr_01
let ob_copy  = {...ob_01};  //copiado do objeto ob_01

console.log(arr_copy, ob_copy);

arr_01.push(5);
ob_01.nome = 'Laila';

console.log(arr_01, ob_01);
console.log(arr_copy, ob_copy);