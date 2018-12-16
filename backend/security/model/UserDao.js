class UserDao {

    constructor(connection) {
        this._connection = connection;
    }

    list() {

        return new Promise((resolve, reject) => 
            this._connection.query('select * from usuario', (err, users) => {
                if(err) return reject(err);
                resolve(users);
            })
        );
    }
}

module.exports = UserDao;