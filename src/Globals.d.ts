declare module NodeJS {
    interface ProcessEnv {
        // Ambiente
        ENV: string;

        // Banco de produção
        DB_PROD_NAME: string;
        DB_PROD_USER: string;
        DB_PROD_PASSWORD: string;
        DB_PROD_HOST: string;
        DB_PROD_PORT: string;

        // Banco de desenvolvimento
        DB_DEV_NAME: string;
        DB_DEV_USER: string;
        DB_DEV_PASSWORD: string;
        DB_DEV_HOST: string;
        DB_DEV_PORT: string;
    }
}
