/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
 * call()
 * O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
 * Pode utilizar o call para encadear construtores para um objeto
 */

//Produto -> aumento, desconto
// (Camiseta = Cor, caneca = Material)

function Produto(nome, preco) {
    this.nome  = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};



function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Linkando o prototype do objeto "Camiseta" com o prototype do objeto "Produto"
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};



function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
//Linkando o prototype do objeto "Caneca" com o prototype do objeto "Produto"
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);

const caneca = new Caneca('Caneca de Café', 10, 'Vidro', 50);
caneca.desconto(2);
console.log(caneca);
console.log(caneca.estoque)
caneca.estoque = 40; //alterando estoque
console.log(caneca.estoque)