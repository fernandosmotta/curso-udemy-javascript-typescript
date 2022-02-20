// EXEMPLO 01 - Criando um objeto literal
const pessoa1 = {
    nome: "Fernando",
    sobrenome: "Soares",
    idade: 32
}
console.log(pessoa1, pessoa1.nome);


// EXEMPLO 02 - Criando objeto com funcao
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
console.log(criaPessoa('Fernando', 'Soares', 32));
console.log(criaPessoa('Bruna', 'Scherrer', 33));


// EXEMPLO 03 - Criando objeto com metodos internos
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`Olá ${this.nome} ${this.sobrenome} você tem ${this.idade} anos de idade`);
    },
    incrementaIdade() {
        this.idade++;
    }
}

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
