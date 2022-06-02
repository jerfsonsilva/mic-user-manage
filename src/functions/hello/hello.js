'use strict';
const LoggerService = require('../../services/logger.service')
const { sequelize } = require('../../../database/initializedb');

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.hello')
    try {
        const db = await sequelize()
        const sequelizeI = await db.query('select * from user')
        console.log(sequelizeI)
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello",
                sequelizeI
            })
        }
    } catch (error) {
        console.log(error)
        log.info({ msg: 'Error: Hello:', error })
        return {
            statusCode: 400,
            error
        }
    }
};