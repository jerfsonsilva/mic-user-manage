'use strict';
const { Op } = require('sequelize');
const loggerService = require('../../services/logger.service');
const userService = require('../../services/user.service');
const { response, queryEventHttp } = require('../../util/eventHttp');

module.exports.handler = async(event) => {
    const log = new loggerService('Function.user.findAll');
    const query = queryEventHttp(event);
    try {
        const params = {}
        if (query.name) params.name = {
            [Op.like]: `%${query.name}%`
        }
        if (query.email) params.email = query.email;

        const page = query.page || 1;
        const list = await userService.findAll(params, page);
        return response(200, list);
    } catch (error) {
        log.info({ msg: 'Error: ', error });
        return response(400,
            error
        );
    }
};