/**
 * for...in
 * O laço for...in  interage sobre propriedades enumeradas 
 * de um objeto, na ordem original de inserção.  
 * O laço pode ser executado para cada propriedade 
 * distinta do objeto.
 */

const frutas = ['uva', 'morango', 'laranja', 'maça'];

const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Soares',
    idade: 33
}

// exemplo com array(vetor)
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

// exemplo com objeto
for( let chave in pessoa ) {
    console.log(chave, ':', pessoa[chave])
}