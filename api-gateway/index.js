var http = require('http');
const express = require('express')
const app = express()
const helmet = require('helmet');

const config = require('config');

var users = require('./routers/users')

var database = require('database');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Proxy request
app.use(users);

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

database.start(config);

var server = http.createServer(app);
server.listen(3000);