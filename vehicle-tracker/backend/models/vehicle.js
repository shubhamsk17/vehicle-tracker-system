const { DataTypes } =  require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    vehicleNumber:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    vehicleType:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    pucCertificate:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    insuranceCertificate:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Vehicle;