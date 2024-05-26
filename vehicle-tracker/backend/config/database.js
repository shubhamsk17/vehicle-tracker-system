const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehicle_system', 'advance_mobility', 'Advance@123', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;