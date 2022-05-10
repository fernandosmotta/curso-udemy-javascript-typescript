/**
 * Object.values (Retorna os valores)
 * Object.entries (Retorna chaves e valores em array)
 * Object.assign(des, any) (copiar um objeto)
 * Object.getOwnPropertyDescriptor(o, 'prop') (Retorna o descritor de uma propriedade dentro do objeto)
 * ...(spread) (Espalha os valores do objeto dentro de um outro objeto)
 * 
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

//Exemplo Copiando objeto com ...(spread)
const produto1 = { nome: 'Caneca', preco: 1.8 };
const produto2 = { ...produto1, material: 'Vidro' };

produto2.nome = 'Prato';
console.log(produto1);
console.log(produto2);


//Exemplo Copiando objeto com Object.assign
const produto3 = Object.assign( {}, produto1, {material: "Porcelana", quantidade: 3} );
console.log(produto3);

//Exemplo para visualizar as propriedades de metodo dentro da objeto
console.log( Object.getOwnPropertyDescriptor(produto1, 'nome') ); //ver descrição de apenas uma propriedade dentro do objeto
console.log( Object.getOwnPropertyDescriptors(produto1) ); // ver a descrição de todas propriedades dentro do obejto

//Retorna apenas os valores do objeto
console.log( Object.values(produto3) );

//Retorna um array com as propriedades do objeto
console.log( Object.entries(produto1) )