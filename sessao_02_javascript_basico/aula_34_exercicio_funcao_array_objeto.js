function meuEscopo() {
    const form      = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas   = [];

    //Escuta o evento submit do formulario
    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm(ev) {
        ev.preventDefault();

        const nome      = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome')
        const peso      = form.querySelector('.peso');
        const altura    = form.querySelector('.altura');
        
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        pessoas.push(pessoa);

        console.log(pessoas);

        // Exibir resultado na div
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} PESO: ${peso.value} ALTURA: ${altura.value}</p>`;
    }
}

meuEscopo();



/*
 nao utiliza mais dessa forma 
 previne o comportamento padrao do form(submit) 

form.onsubmit = function(e) {
    e.preventDefauxlt(); 
};
*/