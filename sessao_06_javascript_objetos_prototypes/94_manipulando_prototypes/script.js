// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.chaveC = 'C';

/**
 * O método Object.setPrototypeOf() configura o 'prototype' de um objeto específico para outro objeto ou null.
 */
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);



/**
 * Exemplo com __proto__ NÃO UTILIZAR é apenas para estudo
 */
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Object('Camisa', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
};

//seta o prototype
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(50);
p2.aumento(100);

console.log(p2)

// Cria o objeto e seta o prototype
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
p3.preco = 100;
p3.aumento(10);
console.log(p3)
