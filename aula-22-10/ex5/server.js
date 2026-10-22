const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

let produtos = [
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 80 },
    { id: 3, nome: 'Teclado', preco: 200 }
];

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
    const idTexto = req.params.id;
    const id = parseInt(idTexto, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            sucesso: false,
            erro: `ID inválido: "${idTexto}" não é um número`
        });
    }

    if (id <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'ID deve ser um número positivo'
        });
    }

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: `Produto com ID ${id} não encontrado`
        });
    }

    res.status(200).json({
        sucesso: true,
        dados: produto
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
