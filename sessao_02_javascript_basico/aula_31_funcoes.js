function saudacao(nome) {
    return `Bom dia, ${nome} tudo bem com você ?`
}

function soma( x = 1, y = 1 ) {
    return x + y;
}

console.log( saudacao('Fernando') );
console.log( soma(10, 20) );
console.log( soma() );


// Funções anônimas,sao funcoes sem nome
const raizQuadrada1 = function(n) { return n ** 0.5 };
console.log( raizQuadrada1(9) );


// Arrow function, possui uma sintaxe mais curta quando comparada a uma expressao de funcao
// Tambem é uma funcao anonima
const raizQuadrada2 = (n) => { return n ** 0.5 }; // Exemplo 01
const raizQuadrada3 = n => n ** 0.5;              // Exemplo 02 com sintaxe bem mais curta, sem a necessidade do return

console.log(raizQuadrada2(16));
console.log(raizQuadrada3(25));