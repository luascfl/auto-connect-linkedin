(async function connectAndSend() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function scrollToBottom() {
        console.log('Descendo até o final da página...');
        window.scrollTo(0, document.body.scrollHeight);
        await delay(3000); // Aguarda 3 segundos para garantir que todos os elementos sejam carregados
    }

    async function clickConnectButtons() {
        // Seleciona todos os botões com o texto "Conectar"
        const connectButtons = Array.from(document.querySelectorAll('button'))
            .filter(button => button.innerText.trim() === 'Conectar');
        
        if (connectButtons.length > 0) {
            console.log(`Encontrados ${connectButtons.length} botões de conectar.`);
            for (const button of connectButtons) {
                button.click();
                console.log('Botão "Conectar" clicado.');
                await delay(1000); // Aguardar 1 segundo entre cliques para evitar problemas

                // Aguardar o modal de confirmação aparecer
                await delay(2000);

                // Clicar no botão "Enviar sem nota"
                const sendWithoutNoteButton = Array.from(document.querySelectorAll('button'))
                    .find(button => button.innerText.trim() === 'Enviar sem nota');

                if (sendWithoutNoteButton) {
                    sendWithoutNoteButton.click();
                    console.log('Botão "Enviar sem nota" clicado.');
                    await delay(1000); // Aguardar 1 segundo após o envio
                } else {
                    console.log('Botão "Enviar sem nota" não encontrado.');
                }
            }
        } else {
            console.log('Nenhum botão "Conectar" encontrado nesta página.');
        }
    }

    async function goToNextPage() {
        // Selecionar o botão "Avançar" de forma genérica usando atributos consistentes
        const nextButton = document.querySelector(
            'button[aria-label="Avançar"].artdeco-pagination__button--next'
        );

        if (nextButton) {
            console.log('Botão "Avançar" encontrado. Clicando...');
            nextButton.click();
            await delay(5000); // Aguarde 5 segundos para a próxima página carregar completamente
            return true; // Indica que avançou para a próxima página
        } else {
            console.log('Botão "Avançar" não foi encontrado. Verifique se há mais páginas.');
            return false; // Indica que não há mais páginas
        }
    }

    async function processPage() {
        await scrollToBottom(); // Desce até o final da página
        await clickConnectButtons(); // Tenta conectar e enviar sem nota
        const hasNextPage = await goToNextPage(); // Sempre tenta avançar
        if (hasNextPage) {
            await processPage(); // Repete o processo na próxima página
        }
    }

    // Inicia o processo
    await processPage();
})();