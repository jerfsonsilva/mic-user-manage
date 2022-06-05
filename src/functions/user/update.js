'use strict';
const { userErrorCode } = require('../../enum/userErrors');
const loggerService = require('../../services/logger.service');
const userService = require('../../services/user.service');
const {
    paramEventHttp,
    inputEventHttp,
    response,
} = require('../../util/eventHttp');

module.exports.handler = async(event) => {
    const log = new loggerService('Function.user.update');
    const { id } = paramEventHttp(event);
    const body = inputEventHttp(event);

    try {
        const { name, email, password } = body;
        const user = await userService.update(id, {
            name,
            email,
            password,
        });

        if (!user) throw userErrorCode.userNotUpdated;

        return response(200);
    } catch (error) {
        log.info({ msg: 'Error: ', error });
        return response(400, {
            error
        });
    }
};