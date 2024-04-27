# Amazon Scraper

Este é um projeto simples para extrair listagens de produtos da Amazon da primeira página de resultados de pesquisa para uma palavra-chave fornecida.

## Configuração e Execução

### Backend (Node.js)

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório ou baixe o código-fonte.
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Instale as dependências do Node.js executando o comando `npm install`.
5. Inicie o servidor Node.js executando o comando `node server.js`.

### Frontend (HTML, CSS, JavaScript)

1. Após iniciar o servidor Node.js, abra um navegador da web.
2. Navegue para `http://localhost:3000` para acessar a página da aplicação.

## Funcionalidades

- Na página da aplicação, você verá um campo de entrada onde pode inserir uma palavra-chave de pesquisa na Amazon.
- Insira uma palavra-chave e clique no botão "Search" para iniciar o processo de extração de dados.
- Os resultados serão exibidos na página abaixo do campo de entrada, apresentando o título do produto, classificação, número de avaliações e imagem do produto.
- Você pode testar a aplicação inserindo diferentes palavras-chave e verificando os resultados obtidos.

## Observações

- Esta aplicação faz raspagem de dados diretamente do site da Amazon. Respeite os termos de serviço e políticas de uso do site ao utilizar técnicas de raspagem de dados.
- O desempenho e a precisão podem depender da velocidade de sua conexão com a internet e da resposta do servidor da Amazon.