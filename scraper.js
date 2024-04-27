const axios = require('axios');
const { JSDOM } = require('jsdom');

// Função para extrair dados da página de resultados da Amazon:
async function scrapeAmazon(keyword) {
    try {
        // Faz uma requisição para a página de resultados da Amazon com a palavra-chave fornecida:
        const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`);

        // Cria um objeto DOM a partir do HTML retornado pela requisição:
        const dom = new JSDOM(response.data);

        // Array para armazenar os produtos extraídos da página:
        const products = [];

        // Itera sobre cada item de resultado na página e extrai os elementos relevantes para cada produto:
        dom.window.document.querySelectorAll('.s-result-item').forEach((item) => {
            const titleElement = item.querySelector('h2');
            const ratingElement = item.querySelector('.a-icon-star-small');
            const numRatingsElement = item.querySelector('.a-size-small.a-spacing-top-mini');

            /* Verifica se todos os elementos necessários foram encontrados, extrai os dados do produto
            e os adiciona ao array de produtos:*/
            if (titleElement && ratingElement && numRatingsElement) {
                const title = titleElement.textContent.trim();
                const rating = parseFloat(ratingElement.textContent.split(' ')[0]);
                const numRatings = parseInt(numRatingsElement.textContent.replace(/[^\d]/g, ''));
                const image = item.querySelector('img').src;

                products.push({
                    title,
                    rating,
                    numRatings,
                    image
                });
            }
        });

        return products;
    } catch (error) {
        throw new Error('Error scraping Amazon: ' + error.message);
    }
}

module.exports = scrapeAmazon;