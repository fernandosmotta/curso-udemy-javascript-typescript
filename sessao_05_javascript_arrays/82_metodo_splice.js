/**
 * O método splice() altera o conteúdo de uma lista, adicionando novos 
 * elementos enquanto remove elementos antigos.
 * EX:
 * array.splice(indice[, deleteCount, elemento1 ...elementoN)
 * indice        = Índice o qual deve iniciar a alterar a lista
 * deleteCount   = Um inteiro indicando o número de antigos elementos que devem ser removidos.
 * elemento1...n = Os elementos a adicionar na lista.
 * 
 * Number.MAX_VALUE
 * A propriedade Number.MAX_VALUE representa o maior valor numérico representável em JavaScript.
 */



//                0        1        2          3          4
//               -5       -4       -3         -2         -1
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//pop (remove o último elemento do indice)
nomes.splice(-1, 1);

//shift (remove o primeiro elemento do indice)
nomes.splice(0, 1);

// push (adiciona elemento no final do array)
nomes.splice(nomes.length, 0, 'Luiz');

// unshift (adiciona elemento no inicio do array)
nomes.splice(0, 0, 'Miranda');


// ----------------------------------------------------------------------------------------
// Exclusão de elementos 
const removidosP = nomes.splice(4, 1);  //excluindo com indice
const removidosN = nomes.splice(-1, 1); //excluíndo com indice negativo
const removidosM = nomes.splice(-2, Number.MAX_VALUE)
console.log(nomes);


// Adicionando Elemento (a partir do indice 2 adicione os 2 nomes)
const add = nomes.splice(2, 0, 'Fernando', 'Bruna')
console.log(nomes, add);

// Adiciando Elemento (Substituir valor do indice 1 "joao" por "diego")
nomes.splice(1, 1, 'Diego')
console.log(nomes);


