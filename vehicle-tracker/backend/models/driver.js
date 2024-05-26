const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Driver = sequelize.define('Driver', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePhoto:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Driver;
