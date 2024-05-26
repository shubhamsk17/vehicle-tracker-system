const { DataTypes } = require('sequelize');
const sequelize =  require('../config/database');
const Driver = require('./driver');
const Vehicle =  require('./vehicle');

const TransferHistory =  sequelize.define('TransferHistory', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fromDriverId:{
        type: DataTypes.INTEGER,
        references:{
            model: Driver,
            key: 'id',
        },
    },
    toDriverId:{
        type: DataTypes.INTEGER,
        references:{
            model: Driver,
            key: 'id',
        },
        allowNull: true,
    },
    vehicleId:{
        type: DataTypes.INTEGER,
        references:{
            model: Vehicle,
            key: 'id',
        },
    },
    transferDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    otherEntity:{
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = TransferHistory;
