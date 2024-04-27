const express = require('express');
const path = require('path'); // Importar o módulo path

const scrapeAmazon = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define o ponto de extremidade da API para realizar o scraping
app.get('/api/scrape', async (req, res) => {
    const { keyword } = req.query;

    // Verifica se o parâmetro de palavra-chave foi fornecido na solicitação
    if (!keyword) {
        return res.status(400).json({ error: 'Missing keyword parameter' });
    }

    try {
        // Chama a função de scraping e aguarda a resposta
        const products = await scrapeAmazon(keyword);
        
        // Retorna os produtos extraídos como resposta da API
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Define uma rota padrão para lidar com solicitações GET para todas as outras rotas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});