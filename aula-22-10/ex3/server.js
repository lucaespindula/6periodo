const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    const dataHora = new Date().toLocaleString('pt-BR');
    console.log(`[${dataHora}] ${req.method} ${req.url}`);
    next();
});

let usuarios = [];
let produtos = [];

app.post('/usuarios', (req, res) => {
    const { nome, idade } = req.body;

    if (!nome || idade === undefined) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Nome e idade são obrigatórios'
        });
    }

    const usuario = {
        id: usuarios.length + 1,
        nome,
        idade
    };

    usuarios.push(usuario);

    return res.status(201).json({
        sucesso: true,
        dados: usuario
    });
});

app.get('/usuarios', (req, res) => {
    res.json({
        sucesso: true,
        dados: usuarios
    });
});

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

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
