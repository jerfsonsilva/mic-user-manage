'use strict';
const { userErrorCode } = require('../../enum/userErrors');
const loggerService = require('../../services/logger.service');
const userService = require('../../services/user.service');
const { response, inputEventHttp } = require('../../util/eventHttp');

module.exports.handler = async(event) => {
    const log = new loggerService('Function.user.create');
    const body = inputEventHttp(event);

    const validation = validationInputCreate(body);

    if (validation.inputs) {
        return response(422, validation);
    }
    try {
        const { name, email, password } = body;

        const user = await userService.create({
            name,
            email,
            password,
        });
        return response(200, {
            user
        });
    } catch (error) {
        log.info({ msg: 'Error: ', error });
        return response(400,
            error
        );
    }
};

function validationInputCreate(event) {
    const inputs = [];
    if (!event.name) {
        inputs.push({ err: 'name is required' });
    }
    if (!event.email) {
        inputs.push({ err: 'email is required' });
    }
    if (!event.password) {
        inputs.push({ err: 'password is required' });
    }
    if (inputs.length > 0) {
        return {
            ...userErrorCode.validationError,
            inputs,
        };
    }
    return {};
}