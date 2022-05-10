/**
 * Prototypes (Protótipos de objetos)
 * Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
 * ------------------------------------------
 * Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro
 * 
 * Definição de protótipo
 * Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo
 * de modelo para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__)
 * que vem da propriedade prototype da função construtura que foi usada para cria-lo.
 * Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar
 * este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null)
 * até encontrar (ou não) tal membro
 */


//Construtura -> Molde(Classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Adicionando metodo no prototype
Pessoa.prototype.nomeCompleto      = function() { return this.nome + ' ' + this.sobrenome };
Pessoa.prototype.nomeCompletoProto = function() { return this.nome + ' ' + this.sobrenome };

//Instância
const pessoa1 = new Pessoa("Luiz", "O.");
const pessoa2 = new Pessoa("Maria", "A.");
const data = new Date(); //Date função construtura

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
