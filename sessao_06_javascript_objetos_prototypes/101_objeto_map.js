/**
 * Object Map
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 * O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. 
 * Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor.
 */

const pessoas = [
    { id:3, nome: 'Luiz' },
    { id:2, nome: 'Maria' },
    { id:1, nome: 'Helena' },
];

//EXEMPLO COM OBJECT
/*
const novasPessoas = {};
for( const pessoa of pessoas ) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
}
*/

//EXEMPLO COM MAP
const novasPessoas = new Map();
for( const pessoa of pessoas ) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));
console.log(novasPessoas.get(2).nome);

//Percorrendo um map
for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

//pegando apenas as chaves
for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}

//pegando apenas os valores
for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}

console.log();

//deletando uma chave
novasPessoas.delete(2);
console.log(novasPessoas);