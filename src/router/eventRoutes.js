'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const auths= require('../middelvare/auth')
const router = express.Router();


//router.apirequest(get,post,delete,put)(path,controllname.functionname)
router.get('/', eventControll.Welcome);
router.get('/allUser', eventControll.allUser);
router.post('/login', eventControll.login);
router.get('/validateToken', auths.verifyToken);



module.exports = {
    routes: router
}