const mysql = require('mysql');

var pool = null;

/*const connection = mysql.createConnection({
    host: 'XXX',
    port: 3306,
    user: 'XXX',
    password: 'XXX',
    database: 'XXX'
});

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou!');
})
*/

exports.start = function (config) {
    console.log("This is a message from the demo package");
    let dbConfig = config.get('database');

    pool = mysql.createPool({
        connectionLimit: dbConfig["pool"].max,
        host: dbConfig["connection"].host,
        user: dbConfig["connection"].user,
        password: dbConfig["connection"].password,
        database: dbConfig["connection"].database
    });

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+ 
        "ID int NOT NULL AUTO_INCREMENT,\n"+
        "Nome varchar(150) NOT NULL,\n"+
        "CPF char(11) NOT NULL,\n"+
        "PRIMARY KEY (ID)\n"+
    ");";

    pool.getConnection(function(err, conn){ 
        console.log('getConnection', err, conn);
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            conn.release();
            console.log('criou a tabela!', results, fields);
        });
    
    });

    console.log('dbConfig', dbConfig);

}