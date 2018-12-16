const express = require('express')
const httpProxy = require('express-http-proxy')
var router = express.Router(); 

const securityServiceProxy = httpProxy('http://localhost:3001');
router.get('/users', (req, res, next) => { securityServiceProxy(req, res, next); })
router.post('/users', (req, res, next) => { securityServiceProxy(req, res, next); })

module.exports = router;
