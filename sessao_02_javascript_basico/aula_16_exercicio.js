/**
 * Fernando Soares da Mota tem 32 anos, e pesa 75 Kg
 * tem 1.73 de altura e seu IMC é de 25.05
 * Fernando Soares nasceu em 1989
 */

const nome = 'Fernando Soares'
const sobrenome = 'Mota'
const idade = 32
const peso = 75
const altura = 1.73 // Altura em Metro

let imc = peso / (altura * altura)
let anoNascimento = 2021 - idade

console.log(nome + ' ' + sobrenome + " tem " + idade + " anos, e pesa " + peso, " Kg")  //Exemplo com Concatenaçao(+)
console.log(`tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`)                 //Exemplo com Template String
console.log(nome, "nasceu em", anoNascimento)                                           //Exemplo com multiplas variaveis separados por virgula(,)

