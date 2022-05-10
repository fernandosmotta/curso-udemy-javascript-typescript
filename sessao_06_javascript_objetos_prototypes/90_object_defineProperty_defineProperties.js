/**
 * defineProperty - defineProperties
 * --------------------------------------------
 * O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
 * O método  Object.defineProperties() define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto.
 */

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        value: estoque,     // valor da chave
        writable: false,    // pode alterar o valor 
        configurable: false // pode apagar ou editar a chave (configurável)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    });
}

const p1 = new Produto('Camiseta', 25, 3);
p1.estoque = 20;
console.log(p1);

//Mostra as chaves do objeto
console.log( Object.keys(p1) ) 