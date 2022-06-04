const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/initializedb');

class User extends Model {}

module.exports.userModel = async() => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: await sequelize(),
        modelName: 'user'
    });
    return User
}