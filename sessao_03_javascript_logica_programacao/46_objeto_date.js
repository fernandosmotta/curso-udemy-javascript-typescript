/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 
 * Cria uma instância JavaScript de Date que representa um único momento no tempo. 
 * Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 
 * 1º de Janeiro de 1970 (UTC).
 */

const data1 = new Date();
console.log(data1.toString()) 
//Resultado: Sun Dec 19 2021 09:47:31 GMT-0300 (Horário Padrão de Brasília)

// mes 0-11 [0=janeiro 11=dezembro]
const data2 = new Date(2021, 11, 17, 12, 20, 25, 500); //ano, mês, dia, hora, minuto, segundo, milissegundo
console.log(data2.toString());

const data3 = new Date('2021-12-18 15:40:45'); //dataString
console.log(data3.toString());


const data4 = new Date();
console.log('Dia:', data4.getDate());     //Retorna o dia 
console.log('Mes:', data4.getMonth() + 1);    //mes começa do zero
console.log('Ano:', data4.getFullYear()); //Retorna o ano

console.log('Hora:', data4.getHours());
console.log('Minuto:', data4.getMinutes());
console.log('Segundo:', data4.getSeconds());
console.log('MiliSeg:', data4.getMilliseconds());
console.log('Dia Semana:', data4.getDay()); //Obtem o numero do dia na semana [0-domingo 6-sabado]

console.log(Date.now()) //Obtem os milisegundos da data atual


/**
 * Funçao para formatar data no formato Brazil
 */
function formataData(data) {
    const dia    = zeroEsquerda( data.getDate() );
    const mes    = zeroEsquerda( data.getMonth() + 1);
    const ano    = zeroEsquerda( data.getFullYear() );
    const hora   = zeroEsquerda( data.getHours() );
    const minuto = zeroEsquerda( data.getMinutes() );

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

function zeroEsquerda(num) {
    return num >=10 ? num : `0${num}`;
}

const dataNow = new Date();
const dataBrasil = formataData(dataNow);
console.log(dataBrasil); 