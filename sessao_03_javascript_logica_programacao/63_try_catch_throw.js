/**
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch
 * 
 * try...catch
 * As declarações try...catch marcam um bloco de declarações para testar (try),  
 * e especifica uma resposta, caso uma exceção seja lançada.
 * 
 * throw
 * A declaração throw lança uma exceção definida pelo usuário. 
 * A execução da função atual vai parar (as instruções após o throw não serão 
 * executadas), e o controle será passado para o primeiro bloco catch na pilha 
 * de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", 
 * o programa vai terminar.
 */


// Exemplo de como utilizar o try...catch
try {
    console.log(naoExiste);
} catch(error) {
    console.log("naoExiste nao existe");
}


function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("Erro: x e y precisa ser números");
    }

    return x + y;
}

try {
    console.log( soma(1, 4) );
    console.log( soma(1, '5') );
} catch(e) {
    console.log(e);
}