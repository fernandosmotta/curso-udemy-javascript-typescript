/**
 * Constructor functions (Funções construtoras)
 * Funções usadas para criar objetos (cria um Molde de objeto)
 * É necessario utiliza a palavra reserva "new" antes de chamar a função
 * Quando se tratar de função construtora
 */

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados (disponivel apenas dentro da function)
    const ID = 12345;
    const metodoInterno = function() {};

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodoFunction = function() {
        console.log(`${this.nome} esse é um método utilizando function\n`);
    };

    this.metodoArrowFunction = () => {
        console.log(`${this.nome} esse é um método utilizando arrow function\n`);
    };
}

const p1 = new Pessoa('Fernando', 'Soares');
const p2 = new Pessoa('Bruna', 'Scherrer');

p1.metodoFunction();
p1.metodoArrowFunction();

//console.log(p1);
//console.log(p2);
