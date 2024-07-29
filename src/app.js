// import { openDb } from './configDB.js';
import { createTable, insertPessoa, selectPessoa, selectPessoas, updatePessoa } from './controllers/Pessoa.js';

import express from 'express';
// openDb();
const app = express();
app.use(express.json());

createTable();
// Rota Raiz
app.get('/', function(req, res) {
    res.send('Home, Rota Raiz');
});
// Rota selectPessoas
app.get('/pessoas', async function(req, res) {
    // Receber os dados da requisição
    let pessoas = await selectPessoas();
    res.json(pessoas);
    console.log(pessoas);
});
// Rota selectPessoa
app.get('/pessoa', async function(req, res) {
    // Receber os dados da requisição
    let pessoa = await selectPessoa(req.body.id);
    res.json(pessoa);
    // console.log(pessoa);
});
// Rota insertPessoa
app.post('/pessoa', function(req, res) {
    // Mostrar os dados da requisição no console
    console.log(req.body);
    // Receber os dados da requisição
    insertPessoa(req.body);    
    res.json(
        {
            "statusCode": 200,
        }
    )
});
// Rota updatePessoa
app.put('/pessoa', function(req, res) {
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "message": "Você precisa informar o ID da pessoa",
        });
    } else {
    // Receber os dados da requisição
    updatePessoa(req.body);    
    res.json(
        {
            "statusCode": 200,
        }
    )
    }
    // Mostrar os dados da requisição no console
    console.log(req.body);    
});

    // Mostar no console
    console.log('Iniciando aplicação');
    // Ligar o servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('API is running on port 3000');
});

