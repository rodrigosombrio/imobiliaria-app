var express    = require('express'); 
var app        = express();          
var bodyParser = require('body-parser');

const pool = require('database');
const connection = require('./modules/connection');

const UserDao = require("./model/UserDao")

// ativando nosso middleware
app.use(connection(pool));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3001; 

var router = express.Router(); 

router.post('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/', function(req, res) {
    console.log('users', req.connection);
    new UserDao(req.connection).list().then(users => res.json(users)).catch((error) => { 
        console("catach", error);
    });
});

app.use('/users', router);
app.listen(port);
console.log('Magic happens on port ' + port);