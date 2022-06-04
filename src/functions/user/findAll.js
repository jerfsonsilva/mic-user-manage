'use strict';
const LoggerService = require('../../services/logger.service')
const UserRepository = require('../../repositories/user.repository');

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.user.findAll')
    try {

        return {
            statusCode: 200,
            body: JSON.stringify({
                userCreated
            })
        }
    } catch (error) {
        log.info({ msg: 'Error: Hello:', error })
        return {
            statusCode: 400,
            error
        }
    }
};