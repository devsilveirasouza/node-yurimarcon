import { openDb } from './configDB.js';

import express from 'express';

openDb();

const app = express();

app.use(express.json());
// Rota Raiz
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});
// Rota post
app.post('/pessoa', function(req, res) {
    // Mostar o corpo da requisição
    console.log(req.body);
    res.json(
        {
            'nome': req.body.nome,
            "statusCode": 200,
        }
    )
});

// Rota SObre
app.get('/sobre', function(req, res) {
    res.send('Rota Sobre');
});
// Mostar no console
console.log('Iniciando aplicação');
// Ligar o servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('API is running on port 3000');
});

