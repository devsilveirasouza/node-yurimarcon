import express from 'express';

const app = express();

app.use(express.json());

import router from './routes.js';

app.use(router);
    // Mostar no console
    console.log('App Initialization!');
    // Ligar o servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('API is running on port 3000');
});

