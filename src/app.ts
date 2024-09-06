// Variáveis de ambiente
require('dotenv').config();

import express from 'express';
import config from 'config';
import cors from 'cors';

import morganMiddleware from './middleware/morganMiddleware';
import sequilize from './database/pg_connection';
import Logger from '../config/logger';
import router from './routes/router';


// Variaveis para endpoint
const PROJECT = 'api';
const VERSION = 'v1';

// Iniciando aplicação
const app = express();
app.use(express.json());
app.use(morganMiddleware);

if (config.get('env') === 'development') {
    app.use(cors());
}

// Rota
app.use(`/${PROJECT}/${VERSION}`, router);

// Escutando porta
const port = config.get<number>('port');

if (config.get('env') === 'development') {
    sequilize
        .sync()
        .then(() => {
            app.listen(port, async () => {
                console.log(`\nServer started on http://localhost:${port}`);
            });
        })
        .catch((error) => { Logger.error(error); });
} else {
    app.listen(port, async () => {
        console.log(`Server started on http://localhost:${port}`);
    });
}

export default app;
