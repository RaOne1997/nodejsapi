'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Sql-quearys');
        const eventsList = await pool.request().query(sqlQueries.eventslist);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


const validateToken = async () => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
      
        try {
            const token = req.header(tokenHeaderKey);
      
            const verified = jwt.verify(token, jwtSecretKey);
            if(verified){
                return res.send("Successfully Verified");
            }else{
                // Access Denied
                return res.status(401).send(error);
            }
        } catch (error) {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        console.log(error.message);
    }
}

// const getById = async (eventId) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');
//         const event = await pool.request()
//             .input('eventId', sql.Int, eventId)
//             .query(sqlQueries.eventbyId);
//         return event.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const creatEvent = async (eventdata) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');
//         const insertEvent = await pool.request()
//             .input('eventTitle', sql.NVarChar(100), eventdata.eventTitle)
//             .input('eventDescription', sql.NVarChar(1500), eventdata.eventDescription)
//             .input('startDate', sql.Date, eventdata.startDate)
//             .input('endDate', sql.Date, eventdata.endDate)
//             .input('avenue', sql.NVarChar(200), eventdata.avenue)
//             .input('maxMembers', sql.Int, eventdata.maxMembers)
//             .query(sqlQueries.createEvent);
//         return insertEvent.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }


const logindata = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Sql-quearys');
        const insertEvent = await pool.request()
            .input('UserName', sql.NVarChar(100), eventdata.UserName)
            .input('password',sql.NVarChar(200),eventdata.password)
                       .query(sqlQueries.login);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

// const updateEvent = async (eventId, data) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');
//         const update = await pool.request()
//             .input('eventId', sql.Int, eventId)
//             .input('eventTitle', sql.NVarChar(100), data.eventTitle)
//             .input('eventDescription', sql.NVarChar(1500), data.eventDescription)
//             .input('startDate', sql.Date, data.startDate)
//             .input('endDate', sql.Date, data.endDate)
//             .input('avenue', sql.NVarChar(200), data.avenue)
//             .input('maxMembers', sql.Int, data.maxMembers)
//             .query(sqlQueries.updateEvent);
//         return update.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const deleteEvent = async (eventId) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');
//         const deleteEvent = await pool.request()
//             .input('eventId', sql.Int, eventId)
//             .query(sqlQueries.deleteEvent);
//         return deleteEvent.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

module.exports = {
    getEvents,
    // getById,
    // creatEvent,
    // updateEvent,
    // deleteEvent,
    logindata,
    validateToken
}