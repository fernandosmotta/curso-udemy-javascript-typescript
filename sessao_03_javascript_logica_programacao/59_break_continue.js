/**
 * Break [sai do laço]
 * O comando break encerra o loop atual, switch, ou o loop que foi informado no 
 * label e transfere o controle da execução do programa para o comando seguinte.
 * 
 * continue [continua para a proxima iteração]
A palavra chave continue termina a atual iteração do laço em que ele se encontra 
ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( let numero of numeros ) {

    if(numero === 3) {
        console.log("3 - Pulou");
        continue;
    }

    if(numero === 6) {
        console.log("6 - Encerrando o loop");
        break;
    }

    console.log(numero);
}

console.log(" ");
console.log("Execuçao após o loop");