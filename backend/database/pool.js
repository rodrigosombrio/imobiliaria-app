const mysql = require('mysql');
const config = require('config');
var fs = require('fs');

let dbConfig = config.get('database');

const pool = mysql.createPool({
    connectionLimit: dbConfig["pool"].max,
    host: dbConfig["connection"].host,
    user: dbConfig["connection"].user,
    password: dbConfig["connection"].password,
    database: dbConfig["connection"].database
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada')); 

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;