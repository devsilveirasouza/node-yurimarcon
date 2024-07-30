import { Router } from "express";

import { createTable, deletePessoa, insertPessoa, selectPessoa, selectPessoas, updatePessoa } from './controllers/Pessoa.js';

const router =  Router();

router.get('/', (req, res) => {
    res.send('API Rodando!');
});

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;