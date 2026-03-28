/* VARIÁVEIS GLOBAIS */
let display = document.getElementById('display'); // Referência do display
let expressao = ''; // Armazena a expressão matemática

/* FUNÇÃO ADICIONAR */
function adicionar(valor) { // Adiciona número ou operador
    expressao += valor; // Concatena à expressão
    atualizarDisplay(); // Atualiza display
}

/* FUNÇÃO ATUALIZAR DISPLAY */
function atualizarDisplay() { // Atualiza conteúdo do display
    display.value = expressao; // Coloca expressão no input
}

/* FUNÇÃO LIMPAR */
function limpar() { // Limpa e reseta tudo
    expressao = ''; // Reseta expressão
    atualizarDisplay(); // Atualiza display
}

/* FUNÇÃO DELETAR */
function deletar() { // Remove último caractere
    expressao = expressao.slice(0, -1); // Remove último char
    atualizarDisplay(); // Atualiza display
}

/* FUNÇÃO CALCULAR */
function calcular() { // Calcula resultado
    try {
        let calculo = expressao.replace(',', '.'); // Substitui vírgula por ponto
        let resultado = eval(calculo); // Executa cálculo
        resultado = Math.round(resultado * 100) / 100; // Limita 2 casas decimais
        expressao = resultado.toString().replace('.', ','); // Formata com vírgula
        atualizarDisplay(); // Atualiza display
    } catch (error) { // Captura erros
        display.value = 'Erro'; // Mostra erro
        expressao = ''; // Limpa expressão
        setTimeout(() => atualizarDisplay(), 1500); // Aguarda 1.5s
    }
}

/* EVENTO DE TECLADO */
document.addEventListener('keydown', function(event) { // Captura teclas pressionadas
    if (event.key >= '0' && event.key <= '9') { // Se for número
        adicionar(event.key); // Adiciona número
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') { // Se for operador
        adicionar(event.key); // Adiciona operador
    } else if (event.key === ',' || event.key === '.') { // Se for vírgula/ponto
        adicionar('.'); // Adiciona ponto
    } else if (event.key === 'Enter') { // Se for Enter
        calcular(); // Calcula resultado
    } else if (event.key === 'Backspace') { // Se for Backspace
        deletar(); // Deleta último caractere
    } else if (event.key === 'Escape') { // Se for Escape
        limpar(); // Limpa tudo
    }
});
