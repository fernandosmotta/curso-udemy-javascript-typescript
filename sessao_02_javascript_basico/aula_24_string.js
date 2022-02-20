/**
 * DOCUMENTAÇAO
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 */

let umaString1 = "Um 'Texto'"   //Inverter aspas dentro da string, se for '' utiliza ""
let umaString2 = 'Um "Texto"'   
let umaString3 = "Um \"Texto\"" //Escapar aspas com barra invertida

//string sao interaveis, por podemos percorrer a string caracter a caracter
//                01234567
let umaString4 = "Um texto"
console.log(umaString4[3])          //Resultado "T"
console.log( umaString4.charAt(5) ) //Pega o elemento que está no indice 5

//Concatena uma ou mais strings
console.log( umaString4.concat(' muito mais Complexo') )
console.log( umaString4.concat(' simples com ', umaString3, ' grande') )

//Pesquisar em qual indice inicia um elemento dentro da string
//Começando sempre do inicio do indice até o final
console.log( umaString4.indexOf('texto') ) //Resultado "3"
console.log( umaString4.indexOf('t') ) //resultado "3"
//Pesquisar pela palavra "Um" iniciando do indice 3
console.log( umaString4.indexOf('Um', 3) ) //Resultado "-1" nao localizou

//Pesquisa em qual indice inicia um elemento dentro da string
//Porém começa a percorrer do último indice até o inicio (fim para o começo)
console.log( umaString4.lastIndexOf('texto') )
console.log( umaString4.lastIndexOf('t') ) //resultado "6"


//Expressao regular
//retorna todas letras minuscular
console.log( umaString4.match(/[a-z]/g) ) //Resultado: [ 'm', 't', 'e', 'x', 't', 'o' ]

//Retorna o indice onde foi encontrado o primeiro resultado da expressao
console.log( umaString4.search(/[a-z]/g) ) //Resultado 1

//Substitui parte de uma string por outro valor (Pode ser utilizado expressao regular)
console.log( umaString4.replace('Um', 'Outro') ) //Resultado: "Outro texto"
console.log( umaString4.replace(/[a-z]/g, '*') ) //Resultado: "U* *****"


//Obter o tamanho de uma string
console.log( umaString4.length )

//Obter parte de uma string, passa o valor do indice inicial e o valor do indice final
console.log( umaString4.slice(3,8) ) //Resultado: "Texto"
//É possivel passar indice negativo, assim ele pega do final para inicio
console.log( umaString4.slice(-3) ) //Resultado: "xto"

//EXERCICIO
let nomeImg = "fotoQualquer.png"
let arqNome = nomeImg.slice(0, -4)                  //Resultado: "fotoQualquer"
let arqExt  = nomeImg.slice(-4)                     //Resultado: ".png"
let arqExt2 = nomeImg.slice(-4, nomeImg.length - 1) //Resultado: ".pn"
console.log( arqNome, ' | ', arqExt, ' | ', arqExt2 )


//Retorna uma parte da string, começando do indice especificado (fotoQualquer.png)
console.log( nomeImg.substr(nomeImg.length - 4) ) //Resultado: ".png"

//Dividir uma string baseado em algum caracter espeficico
console.log( umaString4.split(' ') ) //Resultado: [ 'Um', 'texto' ]
console.log( umaString4.split('t') ) //Resultado: [ 'Um ', 'ex', 'o' ]  
//Limitar Resultado
console.log( umaString4.split('t', 1) ) //Resultado: [ 'Um ' ]


//Coloca string em letras Maiuscula
console.log( nomeImg.toUpperCase() ) //Resultado: FOTOQUALQUER.PNG

//Coloca String em letras minuscula
console.log( nomeImg.toLowerCase() ) //Resultado: fotoqualquer.png