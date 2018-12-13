var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const config = require('config');
var database = require('database');

const securityServiceProxy = httpProxy('http://localhost:3001');

// Proxy request
app.get('/security', (req, res, next) => { securityServiceProxy(req, res, next); })

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

database.start(config);

var server = http.createServer(app);
server.listen(3000);