document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');

    // Adiciona um evento de clique ao botão de pesquisa
    searchBtn.addEventListener('click', async () => {
        // Obtém o valor digitado no campo de entrada
        const keyword = document.getElementById('keyword').value.trim();

        // Verifica se a palavra-chave foi fornecida
        if (!keyword) {
            alert('Please enter a keyword');
            return;
        }

        try {
            // Faz uma solicitação AJAX para o ponto de extremidade da API com a palavra-chave
            const response = await fetch(`/api/scrape?keyword=${keyword}`);
            
            // Converte a resposta para JSON
            const data = await response.json();
            
            displayResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again later.');
        }
    });

    // Função para exibir os resultados na página
    function displayResults(products) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        // Verifica se foram encontrados produtos
        if (products.length === 0) {
            resultsDiv.textContent = 'No products found';
            return;
        }

        // Itera sobre cada produto e exibe-o na página
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const titleElement = document.createElement('h2');
            titleElement.textContent = product.title;
            productDiv.appendChild(titleElement);

            const ratingElement = document.createElement('p');
            ratingElement.textContent = `Rating: ${product.rating} (${product.numRatings} reviews)`;
            productDiv.appendChild(ratingElement);

            const imageElement = document.createElement('img');
            imageElement.src = product.image;
            productDiv.appendChild(imageElement);

            resultsDiv.appendChild(productDiv);
        });
    }
});