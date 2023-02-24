'use strict';

const eventData= require('../data/Sql-quearys');
const Logger = require('../logger');


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


const login = async (req, res, next) => {
    try {
        const data = req.body;
              const insert = await eventData.logindata(data);
        res.send(insert);
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

    res.send("Welcome Abhijeet World")
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
    login
}