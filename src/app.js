import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import router from './routes.js';

app.use(router);

app.listen(3000, () => {
    console.log('API is running on port 3000');
});

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key'),
}, app).listen(3001, () => {
    console.log('Running on port 3001 em https');
});