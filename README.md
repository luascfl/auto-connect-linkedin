# Script de Automação de Conexões no LinkedIn
Este projeto contém um script em JavaScript projetado para automatizar o processo de conectar-se a pessoas no LinkedIn e enviar solicitações de conexão sem notas personalizadas. Este script é fornecido "no estado em que se encontra" e deve ser usado de forma responsável e ética, respeitando os termos de serviço do LinkedIn. **O uso indevido pode levar à suspensão da conta.**

## Recursos Principais
* Rola automaticamente até o final da página de conexões do LinkedIn.
* Identifica e clica nos botões "Conectar".
* Clica no botão "Enviar sem nota" para solicitações de conexão.
* Navega automaticamente para a próxima página de conexões.
* Repete o processo em várias páginas.

## Tecnologias Utilizadas
* JavaScript

## Pré-requisitos
* Um navegador moderno (Chrome, Firefox, etc.) que suporte JavaScript.
* Uma conta no LinkedIn.
* Conhecimento básico de JavaScript. O script é autocontido, mas a familiaridade com operações assíncronas (`async`/`await`) ajudará na compreensão de seu funcionamento.

## Instalação
1. **Baixe o script:** Baixe `Conectar e avançar LinkedIn.js` deste repositório.
2. **Abra as ferramentas de desenvolvedor do navegador:** Na maioria dos navegadores, isso é feito pressionando F12.
3. **Navegue até a página de conexões do LinkedIn:** Vá para a página onde você vê suas solicitações de conexão pendentes.
4. **Injete o script:** No console do desenvolvedor do navegador (geralmente uma aba dentro das ferramentas de desenvolvimento), cole o conteúdo de `Conectar e avançar LinkedIn.js` e pressione Enter.

## Uso
Uma vez que o script seja injetado e esteja em execução, ele começará a conectar-se às pessoas na sua página de conexões atual do LinkedIn. O script navegará automaticamente para as páginas subsequentes. Monitore a saída do console para mensagens indicando o progresso do script e quaisquer problemas encontrados.

**Considerações Importantes:**
* **Limites de Taxa do LinkedIn:** O LinkedIn possui limites de taxa para evitar abusos. Se o script estiver executando muito rapidamente, você pode encontrar erros. Ajuste os atrasos dentro do script (`await delay(...)`) se encontrar problemas. Considere adicionar atrasos mais significativos para evitar detecção.
* **Uso Ético:** Use este script de forma responsável e ética. Evite sobrecarregar o sistema com muitas solicitações.
* **Suspensão de Conta:** Violar os termos de serviço do LinkedIn pode levar à suspensão da conta. Use este script por sua conta e risco.

## Estrutura do Projeto
O projeto consiste em dois arquivos:
* **`Conectar e avançar LinkedIn.js`:** O script principal em JavaScript para automatizar as conexões.
* **`LICENSE`:** A Licença MIT sob a qual este projeto é distribuído.

## Tratamento de Erros e Mensagens
O script inclui registros no console para fornecer feedback sobre sua operação. As mensagens que você pode ver incluem:
* `"Descendo até o final da página..."`: Indica que o script está rolando a página.
* `"Encontrados [número] botões de conectar."`: Mostra o número de botões "Conectar" encontrados.
* `"Botão 'Conectar' clicado."`: Confirma que uma solicitação de conexão foi enviada.
* `"Botão 'Enviar sem nota' clicado."`: Confirma que o botão "Enviar sem nota" foi clicado.
* `"Botão 'Enviar sem nota' não encontrado."`: Indica que o botão não foi encontrado (possivelmente devido a uma mudança na interface do LinkedIn).
* `"Botão 'Avançar' encontrado. Clicando..."`: Mostra que o script está navegando para a próxima página.
* `"Botão 'Avançar' não foi encontrado. Verifique se há mais páginas."`: Indica o fim da lista de conexões.
* `"Nenhum botão 'Conectar' encontrado nesta página."`: Indica que nenhum botão de conexão foi encontrado na página atual.

Se o script encontrar um erro, ele provavelmente parará e registrará uma mensagem de erro no console. Examine o console para obter mais detalhes sobre o erro.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo `LICENSE` para obter detalhes.