const config = {
    database: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'imobiliaria'
        },
        pool: {
            min: 2,
            max: 10,
        },
    }
};

module.exports = config;