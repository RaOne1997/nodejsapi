'use strict';

const express = require('express');
const eventControll = require('../controllers/eventController');
const router = express.Router();


//router.apirequest(get,post,delete,put)(path,controllname.functionname)
router.get('/', eventControll.Welcome);
router.get('/allUser', eventControll.allUser);
router.post('/login', eventControll.login);



module.exports = {
    routes: router
}