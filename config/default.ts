export interface DatabaseParams {
    name: string;
    user: string;
    passwd: string;
    host: string;
    port: number;
}

const env: string = process.env.ENV;
const port: number = 4000;
const getDatabaseParams = (env: string): DatabaseParams => {
    if (env === 'production') {
        return {
            name: process.env.DB_PROD_NAME,
            user: process.env.DB_PROD_USER,
            passwd: process.env.DB_PROD_PASSWORD,
            host: process.env.DB_PROD_HOST,
            port: Number(process.env.DB_PROD_PORT),
        };
    
    } else {
        return {
            name: process.env.DB_DEV_NAME,
            user: process.env.DB_DEV_USER,
            passwd: process.env.DB_DEV_PASSWORD,
            host: process.env.DB_DEV_HOST,
            port: Number(process.env.DB_DEV_PORT),
        };
    }
};

export default {
    env: env,
    port: port,
    database_params: getDatabaseParams(env),
};
