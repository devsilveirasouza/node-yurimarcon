import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER)` );
    });
}

export async function selectPessoas(req, res) {
    openDb().then(db=>{
        db.all('SELECT * FROM pessoas')
        .then(pessoas=>res.json(pessoas))
    });
}

export async function selectPessoa(req, res) {
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM pessoas WHERE id=?', [id])
        .then(pessoa=>res.json(pessoa));
    });
}

export async function insertPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db => {
        db.run('INSERT INTO pessoas (nome, idade) VALUES (?, ?)', [pessoa.nome, pessoa.idade]);
    });
    res.json({
        "statusCode": 200, 
        "message": 'Pessoa inserida com sucesso!'
    });
}

export async function updatePessoa(req, res) {
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE pessoas SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    });
    res.json({
        "statusCode": 200, 
        "message": 'Pessoa atualizada com sucesso!'
    });
}

export async function deletePessoa(req, res) {
    let id = req.body.id;
    openDb().then(db=>{
        
        db.get('DELETE FROM pessoas WHERE id=?', [id])
        .then(res=>res);
    });
    res.json({
        "statusCode": 200
    });
}