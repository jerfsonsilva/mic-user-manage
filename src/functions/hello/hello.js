'use strict';
const LoggerService = require('../../services/logger.service')

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.hello')
    try {
        log.info({ msg: 'Received event:', event })

        return {
            statusCode: 200,
            body: JSON.stringify({
                    message: "Hello",
                    input: event,
                },
                null,
                2
            ),
        }
    } catch (error) {
        log.info({ msg: 'Error: Hello:', error })
        return {
            statusCode: 400,
            error
        }
    }
};