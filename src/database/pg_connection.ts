import { Sequelize } from 'sequelize';
import config from 'config';

import { DatabaseParams } from '../../config/default';


const database_params: DatabaseParams = config.get('database_params');
const sequelize = new Sequelize(
    database_params.name,
    database_params.user,
    database_params.passwd,
    {
        host: database_params.host,
        port: database_params.port,
        dialect: 'postgres',
    }
);

export default sequelize;
