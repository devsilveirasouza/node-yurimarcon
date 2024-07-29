import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER)` );
    });
}

export async function insertPessoa(pessoa){
    openDb().then(db => {
        db.run('INSERT INTO pessoas (nome, idade) VALUES (?, ?)', [pessoa.nome, pessoa.idade]);
    });
}

export async function updatePessoa(pessoa) {
    openDb().then(db=>{
        db.run('UPDATE pessoas SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    });
}

export async function selectPessoas(pessoa) {
    return openDb().then(db=>{
        return db.all('SELECT * FROM pessoas')
        .then(res=>res)
    });
}

export async function selectPessoa(id) {
    return openDb().then(db=>{
        return db.get('SELECT * FROM pessoas WHERE id=?', [id])
        .then(res=>res);
    });
}

export async function deletePessoa(id) {
    return openDb().then(db=>{
        return db.get('DELETE FROM pessoas WHERE id=?', [id])
        .then(res=>res);
    });
}