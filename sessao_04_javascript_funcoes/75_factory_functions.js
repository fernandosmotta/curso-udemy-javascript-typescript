/**
 * Factory function (Função fábrica)
 * A Função de Fábrica é semelhante às funções construtoras/funções de classe, 
 * mas em vez de usar new para criar um objeto, as funções de fábrica simplesmente 
 * criam um objeto e o retornam.
 */


function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        //criando função com a palavra reservada "function" - Ex 01
        fala: function(assunto) {
            return `${nome} ${this.sobrenome}. Palestra: ${assunto}.`
        },
        //criando função encurtada - EX 02
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        
        // Para transformar uma função em atributo, utiliza a palavra reservada "get"
        // Assim é possivel acessar a função igual um atributo comum
        // Só funciona com a função encurtada sem uso da palavra "function"
        // Utilizado quando vai apenas obter informação da função
        get dadosPessoa() {
            return `${this.nome} ${this.sobrenome}: PESO: ${this.peso} e ALTURA: ${this.altura}`;
        },
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }

    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.73, 76);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('JS'));
console.log(p1.imc());
console.log(p1.dadosPessoa);
p1.nomeCompleto = 'Fernando Soares da Mota';
console.log(p1.nomeCompleto);