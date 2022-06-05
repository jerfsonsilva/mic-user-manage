'use strict';
const { userErrorCode } = require('../../enum/userErrors');
const LoggerService = require('../../services/logger.service');
const userService = require('../../services/user.service');
const {
    paramEventHttp,
    response
} = require('../../util/eventHttp');

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.user.delete');
    const { id } = paramEventHttp(event);
    try {
        await userService.delete(id);
        return response(200);
    } catch (error) {
        log.info({ msg: 'Error: ', error });
        return response(400, {
            error
        });
    }
};