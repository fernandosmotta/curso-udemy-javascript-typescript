// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
}
souUmDado();


function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo:");
    funcao();
}
executaFuncao(souUmDado);


// Arrow function 
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();


// Dentro de um objeto
const obj = {
    // Forma 1 de declaração função em objeto
    falar: function() {
        console.log('Estou Falando...');
    },
    // Forma 2 de declaração função em objeto
    andar() {
        console.log('Estou andando...');
    }
};

obj.falar();
obj.andar();