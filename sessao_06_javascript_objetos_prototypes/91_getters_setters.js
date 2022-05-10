/**
 * Getter e Setters
 */

//Função Construtura
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let valorEstoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        configurable: false, // pode apagar ou editar a chave (configurável)
        get: function() {
            return valorEstoque;
        },
        set: function(valor) {
            if( typeof valor !== 'number' ) {
                throw new TypeError("Paramanter not Integer");
                return;
            }

            valorEstoque = valor;
        }
    });

}


//Função Factory
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('Short', 'Bermuda');
            nome = valor;
        }
    }
}



const p1 = new Produto('Camiseta', 25, 3);
console.log(p1);
p1.estoque = 10;
console.log(p1.estoque);


const p2 = criaProduto('Bermuda');
p2.nome = 'Short Moleton';
console.log(p2);
console.log(p2.nome);
