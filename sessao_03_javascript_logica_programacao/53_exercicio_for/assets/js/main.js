/**
 * Solucao criada por mim (Fernando Soares)
 */

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

const container = document.querySelector('.container');

function montaHTML() {
    let div = criaElemento('div');
    percorreElementos(div);
    container.appendChild(div);
}

function percorreElementos(div) {
    for( let i=0; i < elementos.length; i++ ) {
        let { tag, texto } = elementos[i];

        let element = criaElemento( tag );
        element.innerHTML = texto;
        div.appendChild(element);
    } 
}

function criaElemento(e) {
    const elemento = document.createElement(e);
    return elemento;
}

montaHTML();