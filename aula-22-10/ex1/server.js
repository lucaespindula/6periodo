const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

let produtos = [];

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Nome e preço válido são obrigatórios'
        });
    }

    const produto = {
        id: produtos.length + 1,
        nome,
        preco
    };

    produtos.push(produto);

    return res.status(201).json({
        sucesso: true,
        dados: produto
    });
});

app.get('/produtos', (req, res) => {
    res.json({
        sucesso: true,
        dados: produtos
    });
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            sucesso: false,
            erro: 'ID inválido'
        });
    }

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    res.json({
        sucesso: true,
        dados: produto
    });
});

app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, preco } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    if (!nome || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Dados inválidos'
        });
    }

    produto.nome = nome;
    produto.preco = preco;

    res.json({
        sucesso: true,
        dados: produto
    });
});

app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }

    produtos.splice(index, 1);

    res.json({
        sucesso: true,
        mensagem: 'Produto removido'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
