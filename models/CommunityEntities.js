'use strict'
module.exports.community = (sequelize, type) => {
    return sequelize.define('t_community', {
        handlecode: {
            type: type.STRING,
            primaryKey: true
        },
        name: type.STRING,
        description: {
            type: type.STRING,
            allowNull: true,
        },
        status: type.STRING,
        registered_on: type.DATE,
        ceased_on: {
            type: type.DATE,
            allowNull: true,
        },
        creation_date: { type: type.DATE, defaultValue: type.NOW },
        created_by: type.STRING,
        last_updation_date: { type: type.DATE, defaultValue: type.NOW },
        last_updated_by: type.STRING,
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    })
}

module.exports.community_address = (sequelize, type) => {
    return sequelize.define('t_community_address', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        community: type.STRING,
        version: { type: type.INTEGER, defaultValue: 0 },
        geo_address: type.INTEGER,
        address_line_1: type.STRING,
        house_number: type.STRING,
        last_updation_date: { type: type.DATE, defaultValue: type.NOW },
        last_updated_by: type.STRING
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    })
}

module.exports.community_contact = (sequelize, type) => {
    return sequelize.define('t_community_contact', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        community: type.STRING,
        contact_type: type.STRING,
        value_type: type.STRING,
        value: type.STRING,
        deletion_status: { type: type.INTEGER, defaultValue: 0 },
        last_updation_date: { type: type.DATE, defaultValue: type.NOW },
        last_updated_by: type.STRING
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    })
}


module.exports.geo_address = (sequelize, type) => {
    return sequelize.define('t_geo_address', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: type.STRING,
        zipcode: type.STRING,
        state: type.STRING,
        city: type.STRING
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    })
}