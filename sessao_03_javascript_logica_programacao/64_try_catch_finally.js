// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString


try {
    // É executada quando nao há erros
} catch (e) {
    // É executada quando há erros
}
finally {
    // Será executado sempre
}



function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date");
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date("01-01-2021 12:58:12");
    const hora1 = retornaHora(data);
    const hora2 = retornaHora();
    //const hora3 = retornaHora('ocorreErro'); 
    console.log( hora1, hora2 );
} catch(e) {
    console.log('Ocorreu um erro')
} finally {
    console.log("Tenha um bom dia")
}