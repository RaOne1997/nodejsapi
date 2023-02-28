'use strict';

const eventData= require('../data/Sql-quearys');
const Logger = require('../logger');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { DateTime } = require('mssql');




const allUser = async (req, res, next) => {
    try {

        const eventlist = await eventData.getEvents();
        res.send(eventlist);        
        eventData
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// const getEvent = async (req, res, next) => {
//     try {
//         const eventId = req.params.id;
//         const event = await eventData.getById(eventId);
//         res.send(event);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

const validateTokens = async (req, res, next) => {
    const eventlist = await eventData.validateToken(req);
    res.send(eventlist);

}





const login = async (req, res, next) => {
    try {
        
        const data = req.body;
        var encryptedPassword = await bcrypt.hash(data.password, 10);
            const insert = await eventData.logindata(data);
     var token = {};
        
            if(insert!=null){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    token = jwt.sign(data, jwtSecretKey,{expiresIn :"1m"});
            }
            res.status(200).json(token);
    
        Logger.logger.info("data.UserName")
    } catch (error) {

        res.status(400).send(error.message);
    }
}

// const addEvent = async (req, res, next) => {
//     try {
//         const data = req.body;
//         const insert = await eventData.creatEvent(data);
//         res.send(insert);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

// const updatEvent = async (req, res, next) => {
//     try {
//         const eventId =  req.params.id;
//         const data = req.body;
//         const updated = await eventData.updateEvent(eventId, data);
//         res.send(updated);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }

const Welcome = async (req, res, next) => {

    res.send("<a href='api/allUser'>HELLOE</a>")
        // try {
    //     const eventId = req.params.id;
    //     const deletedEvent = await eventData.deleteEvent(eventId);
    //     res.send(deletedEvent);
    // } catch (error) {
    //     res.status(400).send(error.message);
    // }
}


module.exports = {
    allUser,
    Welcome,
    // getEvent,
    // addEvent,
    // updatEvent,
    // deleteEvent,
    login,
    validateTokens
}