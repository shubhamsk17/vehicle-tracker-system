const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const driverRoutes = require('./routes/driverRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const transferRoutes = require('./routes/transferRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/drivers', driverRoutes),
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/transfers', transferRoutes);

sequelize.sync();

module.exports = app;