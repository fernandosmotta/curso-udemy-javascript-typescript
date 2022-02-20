const nome = prompt("Digite seu nome completo:");

document.body.innerHTML  = `Seu nome é: ${nome} <br />`;
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/ >`;
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;
window.document.body.innerHTML += `Qual o primeiro indice da letra "a" do seu nome? ${nome.indexOf('a')} <br />`; 
window.document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? ${nome.lastIndexOf('a')} <br />`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;