const pessoa = ['Fernando', 'Bruna'];

pessoa[0] = 'Soares';  // Altera o valor de um elemento, passando seu indice
pessoa[2] = 'Laila';   // Adiciona um elemento no final do array
console.log( pessoa );

// A propriedade length retorna o comprimento(tamanho) de uma string ou array
console.log( pessoa.length );

// O metodo push() adiciona um ou mais elementos ao final de um array
pessoa.push('Julia');
console.log(pessoa);

// O metodo unshift() adiciona um ou mais elementos no inicio de um array
pessoa.unshift("Jhonatas");
console.log(pessoa);

// O metodo pop() remove o último elemento de um array
pessoa.pop();
console.log(pessoa);

// O metodo shift() remove o primeiro elemento de um array
pessoa.shift();
console.log(pessoa);

// O metodo slice() retorna uma cópia de parte de um array a partir de uma subarray 
// criado entre as posicoes inicio e fim(fim nao é necessario) de um array original.
const pessoa_arr1 = pessoa.slice(1,3);  //copia os elementos da posicao entre 1 ao 3(esse nao é copiado)
const pessoa_arr2 = pessoa.slice(0,-1); //copia todos elementos, menos o último
const pessoa_arr3 = pessoa.slice();     //copia todos elementos
console.log( pessoa_arr1 );
console.log( pessoa_arr2 );
console.log( pessoa_arr3 );

console.log('----------------------------------')

// Procurar o índice de um item no array
// O método indexOf() retorna o indie da primeira ocorrencia do valor fornecido
console.log( pessoa.indexOf('Bruna') );


// Remove um item pela posicao do indice
// O metodo splice() altera o conteudo de uma lista, adicionado novos elementos 
// enquanto remove elementos antigos
let fruta  = ['laranja', 'maça', 'banana', 'manga'];
let indice = fruta.indexOf('banana');
console.log( fruta );
fruta.splice(indice, 1);
console.log(fruta);


console.log('----------------------------------');

// delete o valor de um elemento dentro do array
delete pessoa[1];
console.log(pessoa);

// verifica se uma variavel é do tipo array
console.log( typeof pessoa );
console.log( pessoa instanceof Array );

