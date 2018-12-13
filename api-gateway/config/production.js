const config = {
    database: {
        connection: {
            host: '192.168.0.65',
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