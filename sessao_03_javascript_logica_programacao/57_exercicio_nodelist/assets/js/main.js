const div = document.querySelector(".paragrafos");
const paragrafo = div.querySelectorAll('p');

// Obter a cor de background da pagina
const estiloBody = getComputedStyle( document.body );
const backgroundColorBody = estiloBody.backgroundColor;

for( let p of paragrafo ) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
    console.log(p);
}
