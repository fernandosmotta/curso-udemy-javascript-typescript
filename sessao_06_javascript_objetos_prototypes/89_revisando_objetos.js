//criando objeto literal
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

//criando objeto com construtor
const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otavio';

console.log( pessoa1.nome ); //chamando objeto por cocatenação de ponto
console.log( pessoa1['sobrenome'] ) //chamando objeto por chave

//Para deletar chave do objeto
delete pessoa1.nome;


//para travar um objeto e não deixar que ele sobra alteração, utiliza-se o "freeze";
//Observação "Object.freeze()" pode bloquear alteração de objetos e array
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this) //podemos travar o "this" dentro do objeto
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); //Travando objeto para não receber alteração
p1.nome = 'Outro Nome';

console.log(p1); //retorno: Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }