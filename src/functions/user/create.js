'use strict';
const LoggerService = require('../../services/logger.service')
const userService = require('../../services/user.service')

module.exports.handler = async(event) => {
    const log = new LoggerService('Function.user.create')

    const validation = validationInputCreate(event)
    if (validation.length > 0) {
        return {
            statusCode: 400,
            errors: validation
        }
    }
    try {
        const { name, email, password } = event
        const userCreated = await userService.create({
            name,
            email,
            password
        })
        return {
            statusCode: 200,
            data: userCreated
        }
    } catch (error) {
        log.info({ msg: 'Error: ', error })
        return {
            statusCode: 400,
            error
        }
    }
};

function validationInputCreate(event) {
    const errors = []
    if (!event.name) {
        errors.push({ err: "name is required" })
    }
    if (!event.email) {
        errors.push({ err: "email is required" })
    }
    if (!event.password) {
        errors.push({ err: "password is required" })
    }
    return errors
}