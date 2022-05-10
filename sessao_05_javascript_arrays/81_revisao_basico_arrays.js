// forma 1 para criar um array  forma literal 
const nomes = ['Eduardo', 'Maria', 'Joana'];

//forma 2 para criar um array utilizando o construtor
const nomes2 = new Array('Sabrina', 'Vanessa', 'Marquinho');


console.log(nomes, nomes2);

nomes[2] = 'Joao'; //Altera o valor de um array
console.log(nomes);

delete nomes[2]; //Remove o valor de um array, porém mantem o indice
console.log(nomes);



/**
 * Valor por referência
 */
const lista = ['Eduardo', 'Maria', 'Joana', 'Rosana', 'Diego'];
const novo1 = lista;      //faz referencia com o array lista
const novo2 = [...lista]; //Spread operador (copia novo array)


//remove elemento do final do array (guarda o valor do item removido da memoria)
const removidoFim = lista.pop() 
console.log(removidoFim);

//remove elemento do inicio da array (guarda o valor do item removido da memoria)
const removidoInicio = lista.shift() 
console.log(removidoInicio);

//Adicionar elementos no final do array
lista.push('Marcelo');

//Adicionar elementos no inicio no array
lista.unshift('Wallace');

//Fatiar um array, informando o indice de inicio e fim.
//Porém o indice final não é adicionado, EX:
//slice(1,4) = irá adicionar no novo array apenas os valores do indice 1,2,3
const novaLista1 = lista.slice(1,4);
//pega todos elementos menos o último, quando trabalha com número negativo é subtraído do final do array
const novaLista2 = lista.slice(0,-1); 


/**
 * Converter string em Array
 */
const nome = 'Luiz, Otávio, Miranda';
const nomeArray = nome.split(',');
console.log(nomeArray);


/**
 * Converter Array em String
 */
const nomes3 = [ 'Sabrina', 'Vanessa', 'Marquinho' ];
const nomeString  = nomes3.join(' ');
console.log(nomeString);